const hrdb = require("./hrdb");
const port = 8100;
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const contractDocument = require("./swagger-hr.json");
const api = express();
api.use(bodyParser.json({
    limit: "5mb"
}))
api.use(logger("dev"))
api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(contractDocument));

//region CORS FILTER
api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD");
    res.header("Access-Control-Allow-Origin-Headers", "Origin,Content-Type,Accept");
    next();
});
//endregion

//region POST /hr/api/v1/employees
api.post("/hr/api/v1/employees", (req, res) => {
    const hiredEmployee = req.body;
    const employee = new hrdb.Employee(hiredEmployee);
    res.set("Content-Type", "application/json");
    employee.save().then(() => {
        res.status(200).send(employee);
    }).catch(err => res.status(400).send(err));
})
//endregion

//region GET /hr/api/v1/employees/:identity
api.get("/hr/api/v1/employees/:identity", (req, res) => {
    const identityNo = req.params.identity;
    hrdb.Employee.findOne({identityNo})
        .then(employee => res.status(200).send(employee))
        .catch(err => res.status(400).send(err))
})
//endregion

//region GET /hr/api/v1/employees?page=10&size=50 PAGINATION
api.get("/hr/api/v1/employees", (req, res) => {
    const page = Number(req.query.page || 0);
    const size = Number(req.query.size || 10);
    const offset = page * size;
    hrdb.Employee.find({}, {}, {
        skip: offset, limit: size
    })
        .then(employees => res.status(200).send(employees))
        .catch(err => res.status(400).send(err))
})
//endregion

const service = api.listen(port, () => {
    console.info(`Server is running at port ${port}`);
})
