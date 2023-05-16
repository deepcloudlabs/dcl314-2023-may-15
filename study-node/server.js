// v8 -> C -> libuv -> UV_THREADPOOL_SIZE=32
const http = require("http")
function get_random_int(min=1,max=60){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
function get_lottery_numbers(max=60,size=6){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const numbers = [];
            while (numbers.length < size){
                const number = get_random_int(1,max);
                if (numbers.includes(number)) continue;
                numbers.push(number);
            }
            numbers.sort((x,y)=>x-y);
            resolve(numbers);
        },5_000);
    });
}
const  server = http.createServer(async (req,res)=>{
    if (req.method === "GET"){
        // get_lottery_numbers(60, 6).then(lotteryNumbers => res.end(JSON.stringify(lotteryNumbers)));
        const lotteryNumbers = await get_lottery_numbers(60, 6);
        res.end(JSON.stringify(lotteryNumbers));
    } else {
       res.end("Only GET requests are accepted.");
    }
})
const port = 8300;
server.listen(port,()=>{
   console.log(`Listener: Server listening on port ${port}...`);
});
console.log(`Right after listen call: Server listening on port ${port}...`)