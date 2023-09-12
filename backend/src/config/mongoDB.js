// Connect to mongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);

// Listen to the connected event to show that the connection was successful
// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
