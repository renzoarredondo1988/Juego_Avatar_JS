//Variables que no estan dentro de ninguna funcion
let ataqueJugador; //Variables globales
let ataqueEnemigo; //Variables globales

let vidasJugador = 3;
let vidasEnemigo = 3;

let sectionContenedorReglas;
let sectionEligePersonaje;

let botonReglas;
let botonJugar;

let botonesIniciales;

let imagenZuko= new Image();
imagenZuko.src='imagenes/zuko.png';
imagenZuko.alt="Imagen Zuko";

let imagenKatara=new Image();
imagenKatara.src='imagenes/katara.jpg';
imagenKatara.alt='Imagen Katara';

let imagenAang=new Image();
imagenAang.src="imagenes/aang.jpg";
imagenAang.alt="Imagen Aang";

let imagenToph=new Image();
imagenToph.src="imagenes/toph.jpg";
imagenToph.alt="Imagen Toph";




                    


function iniciarJuego(){
    //Ocultamos la seleccion de ataque para que el usuario solo pueda ver la seleccion de jugador
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = 'none';

    sectionContenedorReglas=document.getElementById("contenedor-reglas");
    sectionContenedorReglas.style.display="none";

    sectionEligePersonaje=document.getElementById("elige-personaje");
    sectionEligePersonaje.style.display="none";

    botonesIniciales=document.getElementById("botones-regla-jugar");
    botonesIniciales.style.display="flex";//debo hacerlo flex para poder aplicar props flex en mi css


    //Tenemos que esconder las otras partes del juego
    botonVerReglas();
    botonJuego();
    
}

function botonVerReglas(){

    botonReglas=document.getElementById('reglas');
    botonReglas.addEventListener('click',verReglas);
    

}

function verReglas(){

    botonesIniciales.style.display="none";
   // sectionContenedorReglas=document.getElementById("contenedor-reglas");
    sectionContenedorReglas.style.display="block";
    volverInicio();
}

function volverInicio(){
    let botonVolverInicio=document.getElementById("volver-inicio");
    botonVolverInicio.addEventListener('click',iniciarJuego);
}



function botonJuego(){
    botonJugar=document.getElementById("jugar");
    botonJugar.addEventListener('click',Jugar);


}




function Jugar(){
    botonesIniciales.style.display="none";
  //  sectionEligePersonaje=document.getElementById("elige-personaje");
    sectionEligePersonaje.style.display="block";
    eligePersonaje();


}

function eligePersonaje(){


    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = 'block';

    let imgZuko=document.getElementById('zuko');
   // document.getElementById('zuko').addEventListener('click', function() {
     //   asignacionPersonajeJugador('Zuko');
    //);

    imgZuko.src=imagenZuko.src;
    imgZuko.alt=imagenZuko.alt;
    imgZuko.addEventListener('click', function() {
           asignacionPersonajeJugador('Zuko');});

    let imgKatara=document.getElementById('katara');
    imgKatara.src=imagenKatara.src;
    imgKatara.alt=imagenKatara.alt;
    imgKatara.addEventListener('click', function() {
        asignacionPersonajeJugador('Katara');});

    let imgAang=document.getElementById('aang');
    imgAang.src=imagenAang.src;
    imgAang.alt=imagenAang.alt;
    imgAang.addEventListener('click', function() {
            asignacionPersonajeJugador('Aang');});

    let imgToph=document.getElementById('toph');
    imgToph.src=imagenToph.src;
    imgToph.alt=imagenToph.alt;
    imgToph.addEventListener('click', function() {
                    asignacionPersonajeJugador('Toph');});


}





function asignacionPersonajeJugador(personaje){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = 'block';

    let personajeJugador = document.getElementById('personaje-jugador');
    personajeJugador.innerHTML = personaje;

    let imgTuPersonaje=document.getElementById('tu-personaje');

    

    if(personaje==='Zuko'){

        imgTuPersonaje.src=imagenZuko.src;
        imgTuPersonaje.alt=imagenZuko.alt;
    } else if(personaje==='Katara'){
        imgTuPersonaje.src=imagenKatara.src;
        imgTuPersonaje.alt=imagenKatara.alt;
    }else if(personaje==='Aang'){
        imgTuPersonaje.src=imagenAang.src;
        imgTuPersonaje.alt=imagenAang.alt;
    }else if(personaje==='Toph'){
        imgTuPersonaje.src=imagenToph.src;
        imgTuPersonaje.alt=imagenToph.alt;
    };



    seleccionarPersonajeEnemigo()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}






function seleccionarPersonajeEnemigo(){

    let personajeEnemigo = document.getElementById('personaje-enemigo');
    let random = Math.floor(Math.random() * 4);

    let imgPersonajeEnemigo=document.getElementById("personaje-contrincante")


    // let random = aleatorio(1, 4) // podria ser tambien asi utilizando la funcion aleatorio

    if(random === 0){
        personajeEnemigo.innerHTML = 'Zuko';
    }else if(random === 1){
        personajeEnemigo.innerHTML = 'Katara';
    }else if(random === 2){
        personajeEnemigo.innerHTML = 'Aang';
    }else if(random === 3){
        personajeEnemigo.innerHTML = 'Toph';
    }

    if(personajeEnemigo.textContent==='Zuko'){

        imgPersonajeEnemigo.src=imagenZuko.src;
        imgPersonajeEnemigo.alt=imagenZuko.alt;
    } else if(personajeEnemigo.textContent==='Katara'){
        imgPersonajeEnemigo.src=imagenKatara.src;
        imgPersonajeEnemigo.alt=imagenKatara.alt;
    }else if(personajeEnemigo.textContent==='Aang'){
        imgPersonajeEnemigo.src=imagenAang.src;
        imgPersonajeEnemigo.alt=imagenAang.alt;
    }else if(personajeEnemigo.textContent==='Toph'){
        imgPersonajeEnemigo.src=imagenToph.src;
        imgPersonajeEnemigo.alt=imagenToph.alt;
    };





    ataque();
}





function ataque(){

    sectionEligePersonaje.style.display="none";

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.addEventListener('click', ataquePunio);
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.addEventListener('click', ataquePatada);
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.addEventListener('click', ataqueBarrida);
    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener('click', reiniciarJuego)
}










function ataquePunio(){//modificamos la variable global ataqueJugador
    ataqueJugador = 'Punio';
    ataqueAleatorioEnemigo();
}

function ataquePatada(){//modificamos la variable global ataqueJugador
    ataqueJugador = 'Patada';
    ataqueAleatorioEnemigo();
}

function ataqueBarrida(){//modificamos la variable global ataqueJugador
    ataqueJugador = 'Barrida';
    ataqueAleatorioEnemigo();
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,4);

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio';
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada';
    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = 'Barrida';
    }

    fight()
}

function fight(){

    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")


    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATASTE!")
        //Aca no hacemos nada. Solo donde perdemos o ganamos
    }else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida'){
        crearMensaje("GANASTE!")
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio'){
        crearMensaje("GANASTE!")
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada'){
        crearMensaje("GANASTE!")
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE!")
        vidasJugador -= 1
        spanVidasJugador.innerHTML = vidasJugador;
    }

    //Revisamos las vidas despues de un COMBATE o Fight!!
    checkVidas()

}

function crearMensajeFinal(resultadoFinal){
    let seccionMensaje = document.getElementById('mensajes');//llamamos a la seccion por el ID
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;
    seccionMensaje.appendChild(parrafo);

    let botonPunio = document.getElementById('boton-punio');
    botonPunio.disabled = true;
    let botonPatada = document.getElementById('boton-patada');
    botonPatada.disabled = true;
    let botonBarrida = document.getElementById('boton-barrida');
    botonBarrida.disabled = true;
}


function checkVidas(){

    let sectionReiniciar = document.getElementById("reiniciar")

    if(vidasEnemigo == 0){
        crearMensajeFinal(`Felicitaciones GANASTE!! 🦾🔥🎊`)
        sectionReiniciar.style.display = 'block';
    }else if(vidasJugador == 0){
        crearMensajeFinal(`Perdiste sos alto manco 🤦‍♂️🤦‍♀️😢`)
        sectionReiniciar.style.display = 'block';
    }

}


function crearMensaje(resultado){
    let seccionMensaje = document.getElementById('mensajes');//llamamos a la seccion por el ID
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu personaje atacó con todo el poder del ${ataqueJugador}, el personaje del enemigo atacó con el poder de la ${ataqueEnemigo} - ${resultado} la ronda 🎉`;
    seccionMensaje.appendChild(parrafo);


}


function reiniciarJuego(){
    //Vamos a usar un nuevo metodo llamado "location.reload()" para recargar la pagina
    location.reload()
}



window.addEventListener('load', iniciarJuego);
//------------------------------------------------------ | | ------------------------------------------------------//
//Recordar que el boton punio le gana a la barrida
//             el boton patada la gana al punio
//             el boton barrida la gana a la patada  
