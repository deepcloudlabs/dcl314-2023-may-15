function gun(){
    return new Promise((resolve,reject) => {
        console.log("gun is running...")
        if(Math.random() < 0.5)
            reject("Ooopps...");
        resolve(42);
    })
}

setInterval(() => gun().then(console.log).catch(console.error), 3_000)