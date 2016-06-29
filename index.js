//@utor: Alberto Morata Corrales.
//Project: Basic Cloud Server Implementation in IoT.
//Date: 20/06/2016

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var chalk = require('chalk');

var handle = {}
handle["/"] = requestHandlers.init;
handle["/init"] = requestHandlers.init;
handle["/action"] = requestHandlers.action;
handle["/window"] = requestHandlers.window;
handle["/pencil"] = requestHandlers.pencil;
handle["/clock"] = requestHandlers.clock;

console.log(chalk.blue("Index: Main Node running"));
server.init(router.route, handle);