// --------------- VERSION USING EXPRESS --------------- //
import app from './src/app.js'; // Imports the app.js module, which contains the Express server configuration.

const PORT = 3000; // Defines the port on which the server will listen for requests.

app.listen(PORT, () => { // Makes the server listen on the defined port and executes the callback function once the server is ready.
    console.log(`Server is listening, you can access it at: http://localhost:${PORT}`); // Displays a message in the console informing that the server is running on the defined port.
});

// --------------- VERSION USING NODE.JS HTTP MODULE --------------- //
/*
import http from 'http'; // Imports the http module from Node.js, which allows creating an HTTP server.

const PORT = 3000; // Defines the port on which the server will listen for requests.

const routes = { // Defines a routes object that maps URLs to messages.
    "/": "You are at the root",
    "/books": "Browsing books",
    "/authors": "Browsing authors",
};

const server = http.createServer((req, res) => { // Creates an HTTP server that listens for incoming requests.
    res.writeHead(200, { "Content-Type": "text/plain" }); // Sets the HTTP response header with status code 200 (OK) and content type as plain text.
    res.end(routes[req.url] || "Route not found"); // req.url is the URL accessed by the user, and routes[req.url] retrieves the associated message. If not found, returns "Route not found".
});

server.listen(PORT, () => { // Makes the server listen on the defined port and executes the callback function once the server is ready.
    console.log(`Server is listening, you can access it at: http://localhost:${PORT}`); // Displays a message in the console informing that the server is running on the defined port.
});
*/

