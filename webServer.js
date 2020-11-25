const http = require("http");
const fs = require("fs");
const router = require("./Router");

http.createServer((request, response) => {    
    
    var {url, method, fresh} = request;
    console.log(url);
    console.log(method);    
    var resource = router(request.url);

    if(resource['resource']===null){
        
        response.writeHead(204).end();
    }
    else{        
        response.writeHead(resource['status'], {'Content-Type': resource['contentType']});        
        fs.createReadStream(resource['resource']).pipe(response);              
    }       

}).listen(3000);
