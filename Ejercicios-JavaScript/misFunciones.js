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