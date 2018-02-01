const express = require('express');
const chirpsStore = require('../chirpsstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chirpsStore.GetChirp(id));
    } else {
        res.send(chirpsStore.GetChirps(id));
    }
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id

    chirpsStore.UpdateChirp(id, req.body);

    res.sendStatus(200);



    // if (!chirp || Object.keys(chirp).length === 0) {
    //     res.sendStatus(404);
    //     return;
    // }
});

router.delete('/:id', (req, res) => {

    chirpsStore.DeleteChirp(req.params.id);
    res.sendStatus(200);
});


module.exports = router;