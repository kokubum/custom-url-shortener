const app = require("./app");
const config = require("./config/config");
const port = config.PORT || 3000;

require("./db/database");

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Everytime that an unhandled rejection happens, the process emitts an event
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting Down...");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
