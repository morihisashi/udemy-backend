import * as http from "http";
// http://localhost:8080/

const server = http.createServer(function(req, res) {
    console.log(req.url);
    if(req.url === '/hello'){
        res.end('hello');
    } else if(req.url === '/bye') {
        res.end('bye');
    }
    
});

server.listen(8080);