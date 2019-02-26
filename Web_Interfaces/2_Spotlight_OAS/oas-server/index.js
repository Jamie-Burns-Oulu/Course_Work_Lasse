"use strict";

var fs = require("fs"),
    http = require("http"),
    path = require("path");

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(
    bodyParser.json({
        strict: false
    })
);
app.get('/', function(req, res){
  res.send("Please use valid page, for example /test/students");
});
app.use((error, request, response, next) => {
    console.log("error");
    if (error !== null) {
        return response.json({ invalid: "json" });
    }
    return next();
});

var oasTools = require("oas-tools");
var jsyaml = require("js-yaml");
var serverPort = process.env.PORT || 8080;

var spec = fs.readFileSync(path.join(__dirname, "/api/oas-doc.yaml"), "utf8");
var oasDoc = jsyaml.safeLoad(spec);

var options_object = {
    controllers: path.join(__dirname, "./controllers"),
    loglevel: "info",
    strict: true,
    router: true,
    validator: true,
    docs: {
        /* disable the writing of docs during startup */
        apiDocs: null,
        apiDocsPrefix: null,
        swaggerUi: null,
        swaggerUiPrefix: null
    }
};

oasTools.configure(options_object);

oasTools.initialize(oasDoc, app, function() {
    http.createServer(app).listen(serverPort, function() {
        console.log("App running at http://localhost:" + serverPort);
        console.log(
            "________________________________________________________________"
        );
        if (options_object.docs !== false) {
            console.log(
                "API docs (Swagger UI) available on http://localhost:" +
                    serverPort +
                    "/docs"
            );
            console.log(
                "________________________________________________________________"
            );
        }
    });
});

app.get("/info", function(req, res) {
    res.send({
        info: "This API was generated using oas-generator!",
        name: oasDoc.info.title
    });
});
