const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); //parses the content

//app.use(express.static('client')); //goes to client folder

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.listen(3000);