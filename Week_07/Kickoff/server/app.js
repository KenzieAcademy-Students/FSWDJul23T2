/**
 * Import express and cors
 */
import express from "express";
import cors from "express";

/**
 * Initialize the express application itself
 */
const app = express();

/**
 * Initialize application-wide middleware.
 *
 * Application-wide middleware is activated by passing the middleware
 * function into the app's .use() method
 */
app.use(cors());
/**
 * The express.json() middleware will convert our incoming request
 * body from a readable stream (that's surprisingly unreadable) to
 * JavaScript readable data.
 */
app.use(express.json());
/**
 * express.urlencoded makes it easier to translate data
 * coded directly into the request URL into readable strings.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 * All routes/endpoints accept minimum two arguments:
 * - URL - the string path that is the URL that this endpoint will process requests
 *    at.
 * - The request handler - a callback function that processes the request
 *    and sends a response. The handler should accept two to three arguments
 *    (we'll focus on the first two):
 *      - request: an object version of the HTTP request (thanks to express.json())
 *      - response: an object that can be used to configure and send an HTTP response.
 */

/**
 * Health check route - a simple route that returns an OK message to indicate
 * the server is running
 *
 * URL: http://localhost:3001
 */
app.get("/", (request, response) => {
  response.sendStatus(200);
});

/**
 * Run the server by calling the app's .listen() method.
 *
 * The .listen() method should accept two arguments:
 * - Port Number: a number that is the HTTP port that requests should be sent to.
 * - Success callback: a function that should run to indicate the server is running.
 */
app.listen(3001, () =>
  console.log("[Server] Server now listening on port 3001.")
);
