//@utor: Alberto Morata Corrales.
//Project: Basic Cloud Server Implementation in IoT.
//Date: 20/06/2016

var querystring = require("querystring");

function init(response, postData) {
    console.log("Handler: Init request handler called");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
        '</head>'+
        '<body>'+
        '<h1>Welcome to your IoT cloud</h1>'+
        '<h2>Choose one of your objects!</h2>'+
        '<form action="/window" method="post">'+
        '<input type="submit" value="Go to my window" />'+
        '</form>'+
        '<form action="/pencil" method="post">'+
        '<input type="submit" value="Go to my mechanical pencil" />'+
        '</form>'+
        '<form action="/clock" method="post">'+
        '<input type="submit" value="Go to my clock alarm" />'+
        '</form>'+
        '</body>'+
        '</html>';        

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();    
}

function window(response, postData) {
  console.log("Handler: Window request handler called");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1>Welcome to your object: window</h1>'+
    '<h2>Choose one of the actions!</h2>'+
    '<form action="/action" method="post">'+
    '<input type="radio" name="text" value="open"> open<br>'+
    '<input type="radio" name="text" value="close"> close<br>'+
    '<input type="radio" name="text" value="clean"> clean<br>'+
    '<input type="submit" value="Run!" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function pencil(response, postData) {
  console.log("Handler: Mechanical Pencil request handler called");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1>Welcome to your object: Mechanical pencil</h1>'+
    '<h2>Choose one of the actions!</h2>'+
    '<form action="/action" method="post">'+
    '<input type="radio" name="text" checked value="70% of pencil leads">status<br>'+
    '<input type="submit" value="Run!" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function clock(response, postData) {
  console.log("Handler: Alarm Clock request handler called");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1>Welcome to your object: Alarm Clock</h1>'+
    '<h2>Choose one of the actions!</h2>'+
    '<form action="/action" method="post">'+
    '<input type="radio" name="text" checked value="set">set<br>'+
    '<input type="radio" name="text" checked value="dismiss">dismiss<br>'+
    '<input type="radio" name="text" checked value="cancel">cancel<br>'+
    '<input type="submit" value="Run!" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function action(response, postData) {
    console.log("Handler: Action request handler called");
   
    setTimeout(function () {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Your object action: " +
        querystring.parse(postData)["text"]+", is done.");
        response.end();
    }, 3000)  
}

exports.init = init;
exports.action = action;
exports.window = window;
exports.pencil = pencil;
exports.clock = clock;