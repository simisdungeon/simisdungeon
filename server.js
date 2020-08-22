const express = require('express');
const carti = require('./carti.json');
const fs = require('fs');
const app = express();
const path = require('path')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/simi_blog'));

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, '/simi_blog', 'index.html'))
})


app.get('/stories', (req,res) => {
    res.render('index' , {
        title: "SIMI'S DUNGEON",
        carti: carti.profiles
    });
});

app.get('/profile', (req, res) => {
    const carte = carti.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `Despre ${carte.nume}`,
      carte
    });
  });


const server = app.listen(4000, (err) => {
    if (err){
        console.log(err);
    }else{
        console.log(`Server running on ${server.address().port}`);
    }
});


