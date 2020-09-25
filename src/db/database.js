const mongoose = require("mongoose");
const config = require("../config/config");

let databaseUri;
if (config.DATABASE_URI) {
  const auxiliarUri = config.DATABASE_URI;
  databaseUri = auxiliarUri.replace(/<username>|<password>/g, (matched) => {
    return matched === "<username>" ? config.DB_USERNAME : config.DB_PASSWORD;
  });
} else {
  databaseUri = `mongodb://localhost:27017/url-shortener-api`;
}

const databaseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(databaseUri, databaseOptions).then((con) => {
  console.log("DB connection successful");
});
