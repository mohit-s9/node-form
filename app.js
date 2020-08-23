const http = require('http');
const fs = require('fs');
const portNumber = 3000;
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.write("<html>");
        res.write("<head><title>Form</title></head>");
        res.write("<body>");
        res.write("<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        res.writeHead(302,{
           "Content-Type": "text/html",
           "Location": "/"
       });
       fs.writeFileSync('message.txt',"Dummy");
       return res.end();
    }

    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(portNumber);