const http = require('http');

http.createServer((req, res) =>{

    res.writeHead(200,{'Content-Type' : 'application/json'});
   
   let salida = {
       Nombre: 'Oscar',
       Edad: '24'
   }
    res.write(JSON.stringify(salida));
    res.end();
}
).listen(8080);

console.log("Servidor escuchando puerto 8080");