const dotenv = require("dotenv");
const path = require("path");

const envPath = path.join(__dirname, "../../.env");
dotenv.config({
  path: envPath,
});

module.exports = {
  PORT: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  BASE_URL: process.env.BASE_URL,
};
