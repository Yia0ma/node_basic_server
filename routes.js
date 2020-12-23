const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    if (req.url === "/users") {
        res.write("<html>");
        res.write("<head><title>Basic NodeJS Server</title></head>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li>User1</li>");
        res.write("<li>User2</li>");
        res.write("<li>User3</li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } else if (req.url === "/") {
        res.write("<html>");
        res.write("<head><title>Basic NodeJS Server</title></head>");
        res.write("<body><h1>Hello World!</h1></body>");
        res.write("</html>");
        return res.end();
    } else {
        res.statusCode = 404;
        res.setHeader("Location", "/")
        return res.end();
    }
}

module.exports = requestHandler;