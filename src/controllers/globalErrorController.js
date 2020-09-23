const AppError = require("../utils/appError");

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 400;
  err.status = err.status || "error";
  err.message = err.message || "something went wrong";

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

module.exports = globalErrorHandler;
