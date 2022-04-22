/* Simulador de un carrito de compra de una Papeleria */

let cantCuaderno = cantLapiz = cantBoligrafo = cantMarcadores = cantCinta = cantPega = cantPapel = cantResaltadores = cantClips = cantCarpetas = 0;
let totalCuadernos = totalLapiz = totalBoligrafo = totalMarcadores = totalCinta = totalPega = totalPapel = totalResaltadores = totalClips = totalCarpetas = 0;
let subtotalCompra;

const calcularPrecio = (cantidad, precio) => {
    return cantidad * precio;
}

const calcularIva = (subtotalCompra) => {
    return (subtotalCompra * 0.21);
}

const validarCantidad = (cantidad) => {
    if (Number.isNaN(parseInt(cantidad))) {
        return 0;
    } else {
        return parseInt(cantidad);
    }
}
do {
    switch (parseInt(prompt(`**SIMULADOR DE LIBRERIA*** 
Ingrese el numero de la opcion del articulo que sea agregar al carrito.
    1. Cuaderno ($ 5)     
    2. Lapiz ($ 1)
    3. Boligrafo ($ 1.5)
    4. Marcadores ($ 7.5)
    5. Cinta adhesivas ($ 6.5)
    6. Pegamento ($ 1.5)
    7. Papel ($ 8)
    8. Resaltadores ($ 3.5)
    9. Clips ($ 4.5) 
    10. Carpetas ($ 3.5)`))) {

        case 1:
            cantCuaderno += (validarCantidad(prompt(`Ingrese la cantidad de cuadernos:`)));
            totalCuadernos = calcularPrecio(cantCuaderno, 5);
            break;

        case 2:
            cantLapiz += (validarCantidad(prompt(`Ingrese la cantidad de lapices:`)));
            totalLapiz = calcularPrecio(cantLapiz, 1);
            break;

        case 3:
            cantBoligrafo += (validarCantidad(prompt(`Ingrese la cantidad de Boligrafos:`)));
            totalBoligrafo = calcularPrecio(cantBoligrafo, 1.5);
            break;

        case 4:
            cantMarcadores += (validarCantidad(prompt(`Ingrese la cantidad de Marcadores:`)));
            totalMarcadores = calcularPrecio(cantMarcadores, 7.5);
            break;

        case 5:
            cantCinta += (validarCantidad(prompt(`Ingrese la cantidad de Cinta Adhesiva:`)));
            totalCinta = calcularPrecio(cantCinta, 6.5);
            break;

        case 6:
            cantPega += (validarCantidad(prompt(`Ingrese la cantidad de Pegamento:`)));
            totalPega = calcularPrecio(cantPega, 1.5);
            break;

        case 7:
            cantPapel += (validarCantidad(prompt(`Ingrese la cantidad de Papel:`)));
            totalPapel = calcularPrecio(cantPapel, 8);
            break;

        case 8:
            cantResaltadores += (validarCantidad(prompt(`Ingrese la cantidad de Resaltadores:`)));
            totalResaltadores = calcularPrecio(cantResaltadores, 3.5);
            break;

        case 9:
            cantClips += (validarCantidad(prompt(`Ingrese la cantidad de Clips:`)));
            totalClips = calcularPrecio(cantClips, 4.5);
            break;

        case 10:
            cantCarpetas += (validarCantidad(prompt(`Ingrese la cantidad de Carpetas:`)));
            totalCarpetas = calcularPrecio(cantCarpetas, 3.5);
            break;

        default:
            alert('El dato ingresado es invalido o no corresponde a ningun articulo');
            break;
    }

} while ((confirm(`Desea agregar un item mas a la compra?`)));

subtotalCompra = (totalCuadernos + totalLapiz + totalBoligrafo + totalMarcadores + totalCinta + totalPega + totalPapel + totalResaltadores + totalClips + totalCinta);
const crearMensaje = () => {
    let encabezado = (`******** TOTAL DE COMPRA ********`);
    let mensaje = "";
    if (cantCuaderno > 0) {
        mensaje += (
            `\nCUADERNOS      ${cantCuaderno}         $ ${totalCuadernos}`);
    }
    if (cantLapiz > 0) {
        mensaje += (
            `\nLAPIZ            ${cantLapiz}            $ ${totalLapiz}`);
    }
    if (cantBoligrafo > 0) {
        mensaje += (
            `\nBOLIGRAFO            ${cantBoligrafo}            $ ${totalBoligrafo}`);
    }
    if (cantMarcadores > 0) {
        mensaje += (
            `\nMARCADORES           ${cantMarcadores}           $ ${totalMarcadores}`);
    }
    if (cantCinta > 0) {
        mensaje += (
            `\nCINTA ADHESIVA           ${cantCinta}            $ ${totalCinta}`);
    }
    if (cantPega > 0) {
        mensaje += (
            `\nPEGAMENTO            ${cantPega}         $ ${totalPega}`);
    }
    if (cantPapel > 0) {
        mensaje += (
            `\nPAPEL            ${cantPapel}            $ ${totalPapel}`);
    }
    if (cantResaltadores > 0) {
        mensaje += (
            `\nRESALTADORES         ${cantResaltadores}         $ ${totalResaltadores}`);
    }
    if (cantClips > 0) {
        mensaje += (
            `\nCLIPS            ${cantClips}            $ ${totalClips}`);
    }
    if (cantCarpetas > 0) {
        mensaje += (
            `\nCARPETAS         ${cantCarpetas}         $ ${totalCarpetas}`);
    }
    let iva = calcularIva(subtotalCompra);
    let totalCompra = iva + subtotalCompra;

    let final = (
        `IVA                         $ ${iva}
    TOTAL                       $ ${totalCompra.toFixed(2)}`);

    return (`
    ${encabezado} 
    ${mensaje}  
    ${final}`);
}
alert(crearMensaje())