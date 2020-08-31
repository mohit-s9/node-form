const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Form</title>");
    res.write("</head>");
    res.write("<body>");
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Send</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();

  } else if (url === "/message" && method === "POST") {
    
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);

    });

    return req.on("end", () => {

      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFile("message.txt", message, (err) => {
        res.writeHead(302, {
          "Content-Type": "text/html",
          "Location": "/"
        });
        return res.end();
      });
      
    });
  }

  res.write("<html>");
  res.write("<head>");
  res.write("<title>Welcome</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Hello from Node.js Server!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler
};