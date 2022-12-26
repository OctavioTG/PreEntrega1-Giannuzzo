alert("BIENVENIDO/A A LA FORRAJERIA SKATESHOP")

let seleccion = 0
let precioTablas = 24000
let precioRuedas = 12000
let precioEjes = 18000

function descuento() {
    precioTablas = precioTablas * 0.9 
    precioRuedas = precioRuedas * 0.9 
    precioEjes = precioEjes * 0.9 
}

function pregunta(){
    let respuesta = prompt("Si tiene cupón de descuento: Ingrese SI.")
    if (respuesta.toUpperCase() == "SI"){
        alert("Tiene 10% de descuento en toda la tienda")
        descuento()
    }
}
pregunta()

do {
    seleccion = prompt("Seleccione: \n1: para ver TABLAS\n2: para ver RUEDAS\n3: para ver EJES\n5: para salir.")
    if(seleccion == 1){
        alert("Tablas Disponibles:\nSanta Cruz $" + precioTablas + "\nBaker $" + precioTablas + "\nAlmost $" + precioTablas + "\nENTER para volver.")
    }else if(seleccion == 2){
        alert("Ruedas Disponibles:\nSpitFire $" + precioRuedas + "\nBones $" + precioRuedas + "\nOj`s $" + precioRuedas + "\nENTER para volver.")
    }else if(seleccion == 3){
        alert("Ejes Disponibles:\nIndependent $" + precioEjes + "\nThunder $" + precioEjes + "\nACE $" + precioEjes + "\nENTER para volver.")
    }else if(seleccion == 5){
        alert("Gracias por venir")
        break
    }
    console.log(seleccion)
} while (seleccion < 4)



