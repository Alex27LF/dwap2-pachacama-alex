
const fs = require('fs');
const hbs = require('hbs');
let rawdata = fs.readFileSync('public/assets/data/productos.json');
let productos = JSON.parse(rawdata);
//console.log(productos[0].nombre);

for (let item of productos){
    //console.log(item);
}

//Obtener el Año
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear()
});

//Producto 1
hbs.registerHelper('Pro1nombre', (text)=>{
    return productos[0].nombre;
});

hbs.registerHelper('Pro1imagen', (text)=>{
    return productos[0].img;
});

hbs.registerHelper('Pro1precio', (text)=>{
    return productos[0].precio;
});

hbs.registerHelper('Pro1color', (text)=>{
    return productos[0].color;
});

//Producto 2
hbs.registerHelper('Pro2nombre', (text)=>{
    return productos[1].nombre;
});

hbs.registerHelper('Pro2imagen', (text)=>{
    return productos[1].img;
});

hbs.registerHelper('Pro2precio', (text)=>{
    return productos[1].precio;
});

hbs.registerHelper('Pro2color', (text)=>{
    return productos[1].color;
});

//Producto 3
hbs.registerHelper('Pro3nombre', (text)=>{
    return productos[2].nombre;
});

hbs.registerHelper('Pro3imagen', (text)=>{
    return productos[2].img;
});

hbs.registerHelper('Pro3precio', (text)=>{
    return productos[2].precio;
});

hbs.registerHelper('Pro3color', (text)=>{
    return productos[2].color;
});

//Producto 4
hbs.registerHelper('Pro4nombre', (text)=>{
    return productos[3].nombre;
});

hbs.registerHelper('Pro4imagen', (text)=>{
    return productos[3].img;
});

hbs.registerHelper('Pro4precio', (text)=>{
    return productos[3].precio;
});

hbs.registerHelper('Pro4color', (text)=>{
    return productos[3].color;
});

//Producto 5
hbs.registerHelper('Pro5nombre', (text)=>{
    return productos[4].nombre;
});

hbs.registerHelper('Pro5imagen', (text)=>{
    return productos[4].img;
});

hbs.registerHelper('Pro5precio', (text)=>{
    return productos[4].precio;
});

hbs.registerHelper('Pro5color', (text)=>{
    return productos[4].color;
});

//Producto 6
hbs.registerHelper('Pro6nombre', (text)=>{
    return productos[5].nombre;
});

hbs.registerHelper('Pro6imagen', (text)=>{
    return productos[5].img;
});

hbs.registerHelper('Pro6precio', (text)=>{
    return productos[5].precio;
});

hbs.registerHelper('Pro6color', (text)=>{
    return productos[5].color;
});