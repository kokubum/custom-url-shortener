const express = require("express");
const urlRouter = require("./routes/urlRouter");
const handlerRouter = require("./routes/handlerRouter");
const globalErrorHandler = require("./controllers/globalErrorController");
const app = express();

app.use(express.json());

app.use("/api/v1", urlRouter);
app.use(handlerRouter);
app.use(globalErrorHandler);
module.exports = app;
