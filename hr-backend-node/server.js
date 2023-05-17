//const hrdb = require("./hrdb");
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
const service = api.listen(port)

