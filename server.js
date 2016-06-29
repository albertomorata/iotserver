//@utor: Alberto Morata Corrales.
//Project: Basic Cloud Server Implementation in IoT.
//Date: 20/06/2016

var http = require("http");
var url = require("url");
var chalk = require('chalk');

function init(route, handle) {
  function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log(chalk.red("Server: Request to " + pathname + " received."));

        request.addListener("data", function(postPortion) { //to decide function/server.
          postData += postPortion; //take the data and wait for the totally end.
          console.log(chalk.red("Server: Received Post Portion '" + postPortion + "'."));
    });

    request.addListener("end", function() { //if finished, route.
      route(handle, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(8080);
  console.log(chalk.red("Server: Server running"));
}

exports.init = init;
