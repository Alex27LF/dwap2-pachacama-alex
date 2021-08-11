const fs = require('fs');
const hbs = require('hbs');

var rawdata = fs.readFileSync('public/assets/data/productos.json', 'utf8');
var productos = JSON.parse(rawdata);
//console.log(productos[0].nombre);

hbs.registerHelper("getProducts", function (){
    var pro = "";
    productos.forEach( objeto => {
        pro += '<div class="Products">';
        pro += '<img src="'+objeto.img+'">';
        pro += '<h2>'+objeto.nombre+'</h2>';
        pro += '<h2>'+objeto.color+'</h2>';
        pro += '<h3>'+objeto.precio+'</h3>';
        pro += '</div>'
    });    
    return new hbs.SafeString(pro);
});