function fun(){
    if(Math.random() < 0.5)
        throw "Ooopps...";
    return 42;
}

function gun(){
    return new Promise((resolve,reject) => {
        if(Math.random() < 0.5)
            reject("Ooopps...");
        resolve(42);
    })
}
try{
    let result = fun();
    console.log(result)
}catch (e) {
    console.error(e);
}finally {
    console.log("Runs all the time!");
}

gun().then( result => console.log(result) )
     .catch( err => console.error(err) )
     .finally( () => console.log("Runs all the time!") )

async function sun(){
    if(Math.random() < 0.5)
        throw "Ooopps...";
    return 42;
}

sun().then( result => console.log(result) )
    .catch( err => console.error(err) )
    .finally( () => console.log("Runs all the time!") )
async function run(){
    let sonuc = await sun();

}

setInterval(gun, 3_000)