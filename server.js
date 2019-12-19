'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 5200;

server.use(express.static('./public'));

server.get('/test', (request, response) => {
    response.send("Yaaay Working!!!!");
});

server.get('/cats', (request, response) => {
    let cats = [
        {name: "Instance"},
        {name: "Sherry"},
        {name: "Newton"},
        {name: 'Twinkle'}
    ];
    response.send(cats);
})

server.listen( PORT, () => console.log("Listening on port 5200"));