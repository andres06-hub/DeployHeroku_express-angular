const express = require('express');
const path = require('path');
const app = express();
// Se define un puerto ó se tomara el 3000 por defecto
const PORT = process.env.PORT || 3000; 

app.use('/static', express.static(__dirname + '/static'))

// Rutas
const routes = {
    raiz: ''
}

app.route(routes.raiz)
    .get((req, res)=>{
        res.sendFile(path.join(__dirname, 'templates/index.html'));
    });

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});
