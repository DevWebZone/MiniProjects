const fs = require('fs');
const http = require('http');
const port = 8000;


function requestHandler(req, res){
    console.log(req.url);
        if(req.headers.accept.split(',')[0] == "text/css"){
             fs.readFile('./style.css', (err, data)=>{
                res.writeHeader(200, {'Content-Type': 'text/css'});
                res.write(data);
                return res.end();
             });  
        }
        else if(req.url == "/script.js"){
            fs.readFile('./script.js', (err, data)=>{
                if(err)
                    console.log("error");
               res.writeHeader(200, {'Content-Type': 'text/javascript'});
               res.write(data);
               return res.end();
            });  
        }
        else{
            if(res.err)
            log("error occured");
        res.writeHead(200, {"content-type":"text/html"})
        fs.readFile("./index.html", (err, data) => {
            if(err){
               return res.end("Error");
            }
            return res.end(data);
        })

        }
        
}
const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err)
        console.log("Server Error");
    console.log("My First Server");
})