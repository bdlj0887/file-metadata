var express = require('express');
var multer = require('multer');
    
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile('./public/form.html');
});

app.post('/new', upload.single('file'), function(req, res){
    res.json({size: req.file.size});
});

app.listen(3000, function(){
    console.log('Started');
});