const dotenv = require("dotenv");
var mongoose = require("mongoose");
// const keys = require("../keys");
mongoURI= 'mongodb+srv://gvgupta789:SYDnrAcSIZAVuaRT@chatter.5igxjfn.mongodb.net/?retryWrites=true&w=majority&appName=chatter'
const url = process.env.mongoURI;

dotenv.config({ path: "./config.env" });

console.log(url,"keyyyyyyy");
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true ,strictQuery : true});

var conn = mongoose.connection;

conn.on('connected', () => {
    console.log("connected");
})

conn.on("disconnected", () => {
    console.log("database is disconnected , kindly connect to a network");
})

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
