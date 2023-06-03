/**
 * Convierte valores en ciertas unidades de medida a otras
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

function convertirUnidades(id, valor) {

    var metro, pulgada, pie, yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("BOBIS, el valor ingresado NO ES UN NUMERO");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";

    } else if (id === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (id === "pulgada") {
        pulgada = valor;
        metro = (valor / 39.37);
        pie = (valor / 12);
        yarda = (valor / 36);
    } else if (id === "pie") {
        pie = valor;
        metro = (valor / 3.281);
        yarda = (valor / 3);
        pulgada = valor * 12;
    } else if (id === "yarda") {
        yarda = valor;
        pulgada = valor * 36;
        pie = valor * 3;
        metro = (valor / 1.094);
    }

    document.LasUnidades.unid_metro.value = Math.round((metro) * 100) / 100;
    document.LasUnidades.unid_pulgada.value = Math.round((pulgada) * 100) / 100;
    document.LasUnidades.unid_pie.value = Number(pie).toFixed(2);
    document.LasUnidades.unid_yarda.value = Number(yarda).toFixed(2);

}

/**
 * Convierte grados a radianes y vice versa
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */

function convertirGR(id) {

    var grad, rad;

    if (id === "grados") {

        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;

    } else if (id === "radianes") {

        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI;

    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;

}

/**
 * Mostramos y ocultamos un div
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input del html
 */

let mostrar_ocultar = (id) => {
    if (id === "mostrarDiv") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Realizar operacion matematica de SUMA
 * @method sumar
 */

let sumar = () => {

    let re, s1, s2;

    s1 = Number(document.operacionesMat.sum_num1.value)
    s2 = Number(document.operacionesMat.sum_num2.value);

    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }

    re = s1 + s2;
    document.getElementsByName("sum_total")[0].innerHTML = re;

}

/**
 * Realizar operacion matematica de RESTA
 * @method resta
 */

let restar = () => {

    let re, s1, s2;

    s1 = Number(document.operacionesMat.res_num1.value);
    s2 = Number(document.operacionesMat.res_num2.value);

    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }

    re = s1 - s2;
    document.getElementsByName("resta_total")[0].innerHTML = re;

}

/**
 * Realizar operacion matematica de MULTIPLICACION
 * @method multiplicar
 */

let multiplicar = () => {

    let re, s1, s2;

    s1 = Number(document.operacionesMat.mul_num1.value);
    s2 = Number(document.operacionesMat.mul_num2.value);

    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }

    re = s1 * s2;
    document.getElementsByName("mult_total")[0].innerHTML = re;

}

/**
 * Realizar operacion matematica de DIVISION
 * @method dividir
 */

let dividir = () => {

    let re, s1, s2;

    s1 = Number(document.operacionesMat.div_num1.value);
    s2 = Number(document.operacionesMat.div_num2.value);

    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }

    re = s1 / s2;
    document.getElementsByName("division_total")[0].innerHTML = re;
}

/**
 * Obtener los valores ingresados por el usuario (distancia y unidad) y ponerlos como parte de la url de la segunda web
 * @method cargarWeb
 */

function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

/**
 * Tomar la url, cortarla cada vez que se detecte un numeral (hashtag, #) para tomar el valor y poder ver cual es la cantidad y cual la unidad
 * @method cargarResultado
 */

let cargarResultado = () => {

    var urlComp, cant, un;

    urlComp = window.location.href;         // Aca le asignamos a 'urlComp' el link completo de la segunda web

    urlComp = urlComp.split("/")[5];     //Cortamos detectando los '/' y tomamos el ultimo elemento que es el que contiene los datos

    cant = urlComp.split("#")[1];        //Cortamos detectando los '#' y tomamos el segundo elemento que es la cantidad
    un = urlComp.split("#")[2];          //Lo mismo que el anterior solo que tomamos el tercer elemento que es la unidad

    document.getElementById("dist").value = cant +"  "+un;

}

/**
 * Guardamos datos ingresados por el usuario usando localstorage
 * @method guardarLocalStorage
 */

function guardarLocalStorage(){
    let cant, un;

    cant=document.getElementById("distancia").value;              //asigno valores segun id y segun name
    un=document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", cant);           //guardamos estos valores en el local storage, entonces seteamos o configuramos el item en el local storage

    localStorage.setItem("unidadesLS", un);

    window.open("2_web.html");              //hacemos que cargue la 2 pagina web

}

/**
 * Tomar valores almacenados en el LOCALSTORAGE para cargarlos en el input correspondiente
 * @method cargarLocalStorage
 */

function cargarLocalStorage(){
    var cant, un;

    cant=localStorage.getItem("distanciaLS");
    un=localStorage.getItem("unidadesLS");

    document.getElementById("dist").value= cant + " " + un;

}

/**
 * Dibujamos un circulo y un cuadrado
 * @method dibujarCircCuad
 */

function dibujarCircCuad(){
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");

    var yMax=canvas.height;
    var xMax=canvas.width;
    var margen=5;

    ctx.fillStyle="#333899";
    ctx.fillRect(0+margen,yMax-40-margen,40,40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle="rgba(239,74,221,0.5)";
    ctx.fill();

}

/**
 * MINI PAINT
 * @method dibujar
 */

let bandera;
let dibujar = (event) => {
    let canvas = document.getElementById("canvasAdibujar");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

/**
 * LIMPIAR MINI PAINT
 * @method limpiarcanvas
 */

let limpiarcanvas = () =>{
    let canvas = document.getElementById("canvasAdibujar");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

/**
 * Realizamos cuadriculado
 * @method dibujo2
 */

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var alturaMax=canvas.height;
    var anchoMax=canvas.width;

    //Dibujamos lineas horizontales

    ctx.beginPath();
    for(var i=0;i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#e07b90";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Dibujamos lineas verticales

    ctx.beginPath();

    for(var i=0;i<anchoMax;){

        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#e07b90";
        ctx.stroke();
        i=i+20;
    }

    ctx.closePath();

    //EJE X

    ctx.beginPath();

        ctx.moveTo(0,alturaMax/2);
        ctx.lineTo(anchoMax,alturaMax/2);
        ctx.strokeStyle = "#0e5cfa";
        ctx.stroke();

    ctx.closePath();

    //EJE Y

    ctx.beginPath();

    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#0e5cfa";
    ctx.stroke();

    ctx.closePath();

}

/**
 * Dibujamos autito rojo en canvas y permitimos limpiar el canvas
 * @method dibujarImagen
 * @param {number} posX - Posicion en x que ingresa el usuario en el input de name inp_x
 * @param {number} posY - Posicion en y que ingresa el usuario en el input de name inp_y
 */

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    let img = new Image();
    img.src = "images/auto.png";

    if (posX < 0 || posY < 0 || posX >= anchoMax || posY >= alturaMax) {  //Entonces no se podria dibujar porque valores exceden los limites
        openDialog();
    } else {
        img.onload = function () {
            ctx.drawImage(img, posX, posY);
        }
    }
}

/**
 * Abrimos dialog si el usuario ingresa algun dato que excede limites dentro del canvas
 * @method openDialog
 */

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

/**
 * Cerramos el dialog
 * @method cerrarDialog
 */

let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

/**
 * Animamos la imagen del auto rojo con tal de que se mueva a lo largo del canvas
 * @method animarAuto
 */

var x = 0;
var dx = 2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x += dx;
    console.log("La coordenada X es: " + x);
    if (x > canvas.width) { //reseteando la variable, no toma valores tan grandes
        x = 0;
    }
}

