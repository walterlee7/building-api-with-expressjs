const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const path = require('path');
const app = express();


app.use(cors());
app.use(express.json()); //JSONs HTML content-type
app.use(express.urlencoded({ extended: false })); //JSONs XML content-type

app.use(express.static(path.join(__dirname, '../client'))); //goes to client folder

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(3000);