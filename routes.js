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
    }
    if (req.url === "/create-user" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split("=")[1];
            console.log(username);
        });
        res.statusCode = 304;
        res.setHeader("Location", "/")
        return res.end();
    }
    if (req.url === "/") {
        res.write("<html>");
        res.write("<head><title>Basic NodeJS Server</title></head>");
        res.write("<body>");
        res.write("<h1>Welcome to Basic NodeJS Server.</h1>");
        res.write("<form action=\"/create-user\" method=\"POST\">");
        res.write("<label for=\"username\">Username:</label>");
        res.write("<input type=\"text\" name=\"username\">");
        res.write("<button type=\"submit\">Submit</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    res.statusCode = 304;
    res.setHeader("Location", "/")
    return res.end();
}

module.exports = requestHandler;