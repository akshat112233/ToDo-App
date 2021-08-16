import * as http from 'http';
import * as uuid  from 'uuid';
var todo = [];

const server = http.createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
        res.setHeader('content-type', 'application/json')
        res.writeHead(200, 'added');
        res.write(JSON.stringify(todo));
        res.end();
    }
    else if (req.url == "/add" && req.method == "POST") {
        req.on('data', (data) => {
            var reqdata = JSON.parse(data);
            reqdata['id'] = uuid.v4();
            todo.push(reqdata);
            console.log(todo);
            res.setHeader('content-type','application/json')
            res.writeHead(200, 'added');
            res.write(JSON.stringify(todo));
            res.end();
        });
        
    }
    else if (req.method == "PUT") {
        let id = req.url.substring(req.url.lastIndexOf('=') + 1);
        req.on('data', (data) => {
            let reqdata = JSON.parse(data);
            let index = todo.findIndex(obj => obj.id == id);
            if (reqdata.name != '' && reqdata.desc) {
                todo[index].name = reqdata.name;
            }
        });
        
        res.writeHead(200, 'text/plain');
        res.write('done buuton is pressed and put method is envoked');
        res.end();
    }
    else if (req.method == 'DELETE') {
        let id = req.url.substring(req.url.lastIndexOf('=') + 1);
        todo = todo.filter(items => items.id !== `${id}`);
        res.setHeader('content-type', 'application/json')
        res.writeHead(200, 'added');
        res.write(JSON.stringify(todo));
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