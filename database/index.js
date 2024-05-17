const dotenv = require("dotenv");
var mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const url = process.env.DATABASE;

console.log(url,"keyyyyyyy");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});

var conn = mongoose.connection;

conn.on('connected', () => {
    console.log("connected");
})

conn.on("disconnected", () => {
    console.log("database is disconnected , kindly connect to a network");
})

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
