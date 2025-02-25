/*let titulo = document.querySelector("h1"); //Selecciona el elemento <h1> del documento.
titulo.innerHTML = "Juego del numero secreto";*/ //Modifica el contenido del elemento <h1> por "Juego del número secreto".

/*let parrafo = document.querySelector("p"); //Selecciona el elemento <p> del documento.
parrafo.innerHTML = "Indica un numero del 1 al 10";*/ //Modifica el contenido del elemento <p> por "Indica un número del 1 al 10".

let numeroSecreto = 0; 
let intentos = 0; 
let ListaNumerosSorteados = []; //Crea una lista vacía para almacenar los números sorteados.
let numeroMaximo = 10;

//Esta funcion reeemplaza las variables anteriores para reducir el codigo y optimizarlo.
function asignarTextoElemento(elemento, texto) { //Define la función 'asignarTextoElemento' con dos parámetros: 'elemento' y 'texto'.
    let elementoHTML = document.querySelector(elemento); //Selecciona el elemento indicado en el documento.
    elementoHTML.innerHTML = texto; //Modifica el contenido del elemento por el texto indicado.
     //Finaliza la función.
}


function VerificarIntento() { //Define la función 'VerificarIntento'.
   let NumerodeUsuario = parseInt(document.getElementById("ValorUsuario").value); //Obtiene el valor ingresado por el usuario y lo convierte a un número entero.
   
   if(NumerodeUsuario === numeroSecreto) { //Si el número ingresado por el usuario es igual al número secreto, se muestra un mensaje de felicitación.
      asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez": "veces"} `)
      document.getElementById("reiniciar").removeAttribute("disabled"); //Habilita el botón de "Nuevo Juego" una vez que el usuario acierta el número secreto.
   } else if (NumerodeUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es menor");
   } else {
        asignarTextoElemento("p", "El número secreto es mayor");
   }
   intentos++; //Incrementa el número de intentos.
   limpiarCaja(); //Llama a la función 'limpiarCaja'.

}

function limpiarCaja() {
     document.querySelector("#ValorUsuario").value = ""; //Limpia el contenido del cuadro de texto.
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; //Genera un número aleatorio entre 1 y 10.
    //Si ya sorteamos todos los números
    if (ListaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles")
    } else {
        //verifica si el número generado está incluido en la lista.
        if(ListaNumerosSorteados.includes(numeroGenerado)){
            //Si lo esta, se vuelve a generar un número aleatorio.
            return generarNumeroSecreto();
        } else{//Si no esta se agrega a la lista.
         ListaNumerosSorteados.push(numeroGenerado); //Agrega el número generado a la lista de números sorteados.
         return numeroGenerado; //Retorna el número generado.
        }
    }
}




function CondicionesIniciales(){
     asignarTextoElemento("h1", "Juego del número secreto"); //Llama a la función 'asignarTextoElemento'.
     asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`); //Llama a la función 'asignarTextoElemento'.
     numeroSecreto = generarNumeroSecreto(); //Genera un número aleatorio y lo asigna a la variable 'numeroSecreto'.
     intentos = 1; //Inicializa el contador de intentos.
}

function reiniciarJuego(){
     //limpiarCaja
     limpiarCaja();
     //Indicar mensaje de intervalo de números
     //Generar el número aleatorio
     //Reiniciar el contador de intentos
     CondicionesIniciales();
     //Deshabilitar el botón de Nuevo Juego
     document.getElementById("reiniciar").setAttribute("disabled","true"); 
}

CondicionesIniciales(); //Llama a la función 'CondicionesIniciales' para establecer las condiciones iniciales del juego.
