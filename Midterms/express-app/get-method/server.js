const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/process_get', function (req, res){

    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
console.log(response);
res.end(JSON.stringify(response));
});

app.listen(3000,function(){
    console.log("Server is running at port 3000");
});