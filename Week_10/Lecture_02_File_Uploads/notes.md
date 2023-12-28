## Static Files
Files on a computer exist at a specific path. For example: `/Users/cody/Documents/Lectures/FSWDJul23T2/Week_10/Lecture_02_File_Uploads/server/controllers/players.controller.js` is the path, or URL, for my controller file that contains the functions used by my player routes to interact with the players in my database.

But it would be a huge security risk if, when deployed, every file in our application were accessible through a basic HTTP request. 

However, there are situations in which we want a portion of the files in our application to be publicly accessible. These files are **not** code files, but rather things like images, documents to download, pdfs, etc.

In order to make a folder within our application publicly accessible, we must declare it a *static* directory. A static directory is used to serve files as-is without the express server intercepting the HTTP request and running one of the route handlers.

To give an example of how I might want to access the `testfile.html` file in the `public` folder, I'd send an http request to `http://localhost:3001/testfile.html`, and I would like to receive that HTML file directly.

To make the `public` folder and its contents *static*, we must invoke an express middleware function to make those contents available.

## File Upload Process

Unlike most forms that we have worked with, any form that involves an uploaded file should not submit the file itself when submitting the form; we want to take a two step approach:
1. Upload the file
2. Submit the form, using the returned path as the file field

Example:
In this demo, we want to upload a player's image when creating a new player. Instead of packaging the file itself with the request body when sending the POST request, we'll need to upload the file first. Then, once the response from the upload comes back, we should be able to see the path that the uploaded file was saved at. We'll then use that path as the imageUrl for the new player.

## File Uploading - Back End
In order to process a file sent via HTTP request, we'll need to install a new library package onto our server called `express-fileupload`. This library will provide us with a middleware function called `fileUpload` that will translate the file into an accessible javascript entity. This entity will we located at `req.files`.