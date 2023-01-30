// Task Name: Lab 3
// Perez, Patrick M.
// WD - 201

var http = require('http');

var server = http.createServer(function (req, res){
  if(req.url == '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><h1 style="font-family:arial;">Welcome to my Node.js Application</h1><body style="background-color:#B2BEB5;"><p style="font-family:courier;">Welcome Patrick Perez. This is an activity about basics of Node.js</p></body></html>');
    res.end();
  }
  else if (req.url == '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><h1 style="font-family:arial;">This is the About Page</h1><body style="background-color:#B2BEB5;"><p style="font-family:courier;">Hello Patrick Perez. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>');
    res.end();
  }
  else if (req.url == '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><h1 style="font-family:arial;">This is the Contact Page</h1><body style="background-color:#B2BEB5;"><p style="font-family:courier;">Patrick Perez, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>');
    res.end();
  }
  else if (req.url == '/gallery'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><h1 style="font-family:arial;">This is the Gallery Page</h1><body style="background-color:#B2BEB5;"><p></p></body></html>');
    res.end();
  }
  else res.end('Invalid Request');

});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')