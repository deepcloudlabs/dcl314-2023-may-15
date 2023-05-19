const {Producer} = require("node-rdkafka");

const create_producer = () => {
   const producer = new Producer({
       "bootstrap.servers": "127.0.0.1"
   });
   return new Promise((resolve,reject)=>{
       producer.on('ready', () => resolve(producer))
               .on('delivery-report', () => {})
               .on('event.error', (err) => {
                   console.warn(`Error while creating producer: ${err}`);
                   reject(err);
               });
       producer.connect();
   })
}

const WebSocket = require("ws");
const webSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
webSocket.on("open", async ()=>{
    console.log("Successfully connected to the binance ws server.");
    const tradeProducer = await create_producer();
    webSocket.on("message", frame => {
        // {"e":"trade","E":1684409448402,"s":"BTCUSDT","t":3120728490,"p":"27366.11000000","q":"0.01680000","b":21179795379,"a":21179793593,"T":1684409448402,"m":false,"M":true}
        let parsedTrade = JSON.parse(frame.toString());
        const trade = {
            symbol: parsedTrade.s,
            price: Number(parsedTrade.p),
            quantity: Number(parsedTrade.q),
            volume: Number(parsedTrade.p) * Number(parsedTrade.q),
            timestamp: new Date(parsedTrade.T),
            sequenceId: parsedTrade.t
        };
        console.log(trade);
        tradeProducer.produce("trades", null, new Buffer(JSON.stringify(trade)), trade.symbol);
    })
})