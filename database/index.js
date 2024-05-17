var mongoose = require("mongoose");
const keys = require("../keys");
const key = keys.mongoURI;

console.log(keys.mongoURI,"keyyyyyyy");
mongoose.connect(process.env.key, { useNewUrlParser: true, useUnifiedTopology: true ,strictQuery : true});

var conn = mongoose.connection;

conn.on('connected', () => {
    console.log("connected");
})

conn.on("disconnected", () => {
    console.log("database is disconnected , kindly connect to a network");
})

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
