const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/world")
const citySchema = new mongoose.Schema({
    "_id": String,
    "name": String,
    "district": String,
    "population": Number
});
const countrySchema = new mongoose.Schema({
    "_id": String,
    "name": String,
    "population": Number,
    "surfaceArea": Number,
    "continent": String,
    "indepYear": Number,
    "headOfState": String,
    "lifeExpectancy": Number,
    "gnp": Number,
    "governmentForm": String,
    "localName": String,
    "cities": [citySchema]
})

const Country = mongoose.model("countries1", countrySchema);
Country.findOne({"_id": "TUR"},{"_id": false, "name": true})
    .then(country => {
        console.log(country);
}).catch(console.error);
async function fun(){
    const france = await Country.findOne({"_id": "FRA"},{"_id": false, "name": true})
         .exec();
    console.log(france);
    return france;
}
fun();
/*const timerId = setInterval(()=>{
    console.log("Hello Mars!");
}, 1_000);
setTimeout(()=>{
    clearInterval(timerId);
}, 10_000)*/
