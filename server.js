const express = require('express')
const app = express()
const hbs = require('hbs');


app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/Views/parciales');
app.set('view engine', 'hbs');
require('./hbs/helpers');
const port = process.env.PORT|| 3000

app.get('/',(req, res) => {
  res.render('home',{
      nombre: 'oscar miLLAn rivas'
     });
  });

  app.get('/about',(req, res) => {
    res.render('about',{
        nombre: 'Oscar'
       });
    });
    
app.listen(3000, () =>{
    console.log("Servidor escuchando puerto 3000");
});


