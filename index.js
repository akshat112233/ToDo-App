const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, 'text/plain');
        res.write('this is default landing page');
        res.end();
    }
    else if (req.url == "/add" && req.method == "POST") {
        res.writeHead(200, 'text/plain');
        res.write('we are in add part');
        res.end();
    }
    else if (res.url == "/done" && req.method == "PUT") {
        console.log(req.url, req.method);
        res.writeHead(200, 'text/plain');
        res.write('done buuton is pressed and put method is envoked');
        res.end();
    }
    else if (req.url == '/delete' && req.method == 'DELETE') {
        res.writeHead(200, 'text/plain');
        res.write('this method will be called when delete button is pressed');
        res.end();
    }
    else {
        console.log(req.url, req.method);
        res.writeHead(404, 'text/plain');
        res.write('error 404, page not found');
        res.end();
    }
});

server.listen(4000, () => {
    console.log("server has started");
});