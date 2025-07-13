const express = require('express');
const path = require('path')
const app = express();

app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get('/', (req,res) =>{
     res.render("index", {title: "Mini Messageboard", messages: messages});
    });
app.get('/new', (req,res) => {
    res.sendFile(path.join(__dirname,"./routes/new.html"));
});

app.listen(3000);