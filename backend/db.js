const mongoose = require("mongoose");

const authDB = mongoose.createConnection(
    "mongodb://localhost:27017/authDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

authDB.on("connected", () => console.log("authDB Connected successfully."));
authDB.on("error", (err) => console.error("authDB Connection Error:", err));

const financeDB = mongoose.createConnection(
    "mongodb://localhost:27017/financeDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

financeDB.on("connected", () => console.log("financeDB Connected successfully."));
financeDB.on("error", (err) => console.error("financeDB Connection Error:", err));

module.exports = { authDB, financeDB };
