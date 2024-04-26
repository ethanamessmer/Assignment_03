/*
Authors: Ethan Messmer, Benjamin Johll

*/



var express = require("express");
var cors = require("cors");
var app = express();
//var fs = require("fs");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
const port = "8081";
const host = "localhost";
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";
const client = new MongoClient(url);
const db = client.db(dbName);
app.listen(port, () => {

    console.log("App listening at http://%s:%s", host, port);

    app.get("/listItems", async (req, res) => {
        await client.connect();
        console.log("Node connected to Get MongoDB")
        const query = {};
        const results = await db
        .collection("")
    })




});