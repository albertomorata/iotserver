//@utor: Alberto Morata Corrales.
//Project: Basic Cloud Server Implementation in IoT.
//Date: 20/06/2016

var chalk = require('chalk');

function route(handle, pathname, response, postData) {
  console.log(chalk.green("Router: Ready to route a request to " + pathname));
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log(chalk.green("Router: Hander for: "+pathname+" not found."));
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 -- Object: "+pathname+" not found.");
    response.end();
  }
}

exports.route = route;