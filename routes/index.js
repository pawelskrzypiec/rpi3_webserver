var express = require('express');
var router = express.Router();
var promises = require('fs').promises;

router.get('/', function(req, res, next) {
    if (req.accepts('text/html')) {
        Promise.all([
            promises.readFile('/sys/bus/i2c/devices/1-0044/temperature', { encoding: 'ascii' }),
            promises.readFile('/sys/bus/i2c/devices/1-0044/humidity', { encoding: 'ascii' }),
        ]).then(([temperature, humidity]) => res.render('index', {temp: temperature, hum: humidity}));
    }
    else {
        res.status(400);
        res.send('error');
    }
});

module.exports = router;
