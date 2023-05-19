const Kafka = require("node-rdkafka");
const stream = new Kafka.createReadStream({
    'group.id': 'algotrading',
    "bootstrap.servers": "127.0.0.1",
    "enable.auto.commit": true
}, {}, {topics: ["trades"]});

stream.on('data', message => {
    let trade = JSON.parse(message.value.toString());
    console.log(trade);
}).on('error', console.error)

console.log("Consumer is just started!");