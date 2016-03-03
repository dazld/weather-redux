const app = require('express')();


app.get('/foo', function(req,res){
    res.send('bar');
});

module.exports = app;
