'use strict';

const express = require('express');

const app = express();

const router = express.Router();

const route = router.get('/', (rew, res, next) =>
{
    res.status(200).send({
        title: "Node store API",
        version: "0.0.2"
    });
});

const create = router.post('/', (rew, res, next) =>
{
    res.status(201).send(req.body);
});

app.use('/', route);

module.exports = app;