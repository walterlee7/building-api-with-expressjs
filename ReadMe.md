Building API with Express.js Lab Assignment

To run program, type in terminal: node server/server.js
Then go to localhost: 3001.

Setup an API with the project structure like:
/client
/server
/routes
- index.js
- chirps.js
server.js
chirpsstore.js (file provided in this lab)

In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js.
Import chirpsstore, and use it to read and write chirps to the json file.
The json file will be created the first time you run successfully!
Remember to export your router with module.exports.
In routes/index.js, import the chirps router and add it to a new router.
use app.use with the /chirps route to add to the root api router.
Export the router.
In server.js, import the routes folder (./routes)
add the api router to the express app with the path /api
Test all of your methods using Postman (https://www.getpostman.com/)

ADVANCED

Create an index.html, styles.css, and app.js file in the client folder
Code an app that uses jQuery to call your API and displays chirps
Create a form that lets you create new chirps
Add an x next to chirps that will delete them when clicked
When a chirp is clicked, popup a modal that lets you edit the chirp
Remember to use express.static middleware!