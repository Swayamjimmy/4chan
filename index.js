const express = require('express');
const path = require('path')
const app = express();

app.use(express.urlencoded({ extended: true })); // To use form inputs in req.body

app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

const messages = [
  {
    id:1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id:2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get('/', (req,res) =>{
     res.render("index", {title: "Mini Messageboard", messages: messages});
    });
app.get('/new', (req,res) => {
    res.render("form");
});

app.post('/new',(req,res) => {
    const {msg, auth} = req.body;
    messages.push({  id: messages.length + 1, text: msg, user: auth, added: new Date() });
    res.redirect('/');
})

app.get('/message/:id', (req, res) => {
  const messageId = parseInt(req.params.id, 10);
  const message = messages.find(m => m.id === messageId);

  if (!message) {
    return res.status(404).send('Message not found');
  }

  res.render('message', { title: 'Message Details', message });
});


app.listen(3000);