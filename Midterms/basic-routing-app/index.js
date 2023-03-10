const express = require('express');
const app = express();

app.use(express.static('public'));

// UPLOAD
app.use(express.static('public'));

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: fileStorage });
app.post('/uploads', upload.single('myFile'), (req, res) => {
    console.log(req.file);
    req.file.mimetype = mime.lookup(req.file.originalname);
    res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});

app.get('/file-upload', (req, res) => {
    res.sendFile(__dirname + '/' + 'file-uploaded.html');
});


// -----------------------
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

// FORM
app.use(express.urlencoded());

app.get('/', (req, res, next) => {
  res.send(`<form method="POST" action="/">
  <input type="text" name="name" placeholder="name">
  <input type="text" name="subject" placeholder="subject">
  <input type="text" name="email" placeholder="email" >
  <input type="text" name="message" placeholder="message" >

  <input type="submit">
</form>`);
});

app.post('/', function (req, res, next) {
  res.send(JSON.stringify(req.body));
});

// LISTEN
app.listen(3000, function () {
    console.log('Server is running on port 3000');
  });