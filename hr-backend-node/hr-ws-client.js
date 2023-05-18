const io = require("socket.io-client");

const ws_client = io("ws://localhost:8100");
ws_client.on("connect", () => {
    console.log("connected to the server.");
    ws_client.on("hr-events", event => {
        if (event.eventType === "EMPLOYEE_HIRED"){
            console.log(`Printing security card for the employee (${event.identityNo})`);
        } else if (event.eventType === "EMPLOYEE_FIRED"){
            console.log(`Disabling security card for the employee (${event.employee.identityNo})`);
        }
    })
});
console.log("HR Node Client is now running...");
