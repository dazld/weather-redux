const es6render = require('express-es6-template-engine');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const { resolve } = require('url');
const _ = require('lodash');

// const config = require('../assets/js/lib/config').default;
// const assetPath = require('../assets/js/lib/asset-path').default;
// const indexHTML = fs.readFileSync(path.resolve(__dirname, '../static/index.html')).toString();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

app.engine('html', es6render);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'html');

function serveIndex(req,res) {
    res.render('index', {
        locals: {
            title: 'WeatherThing'
        }
    });
}

app.get('/', serveIndex);

module.exports = app;
