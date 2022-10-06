/*const op = require('./ejercicio1.js')

console.log(op)

console.log(`Seleccione una opcion 1.Resta 2`)
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    switch(stdin.toString()){
        case "1":
            op.suma(10,6)
    
        case "2":
            op.resta(10,6)
    
        case "3":
            op.multiplicacion(5,5)
        
        case "3":
            op.divicion(8,2)
    
        case "4":
            op.potencia(2,3)
        case "5":
            op.radicacion(16,2)

    process.exit();
}
})*/
/*
switch(opcion){
    case 1:
        op.suma(10,6)

    case 2:
        op.resta(10,6)

    case 3:
        op.multiplicacion(5,5)
    
    case 3:
        op.divicion(8,2)

    case 4:
        op.potencia(2,3)
    case 5:
        op.radicacion(16,2)
}*/


//1.requerir modulo http
const http=require("http")
//funcion callback para manejar el servidor
function handleServer(req,res){
    res.writeHead(404,{"Content-type":"text-html"})
    res.write("<h1>Esta es la respuesta del servidor</h1>")
    res.end()
}
//2. crear server 
const server=http.createServer(handleServer).listen(5000)