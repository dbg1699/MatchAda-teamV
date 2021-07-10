//VENTANAS MODALES
swal({ 
  title: " ¡Bienvenida!",
  text:"Tu objetivo es juntar tres o mas items del mismo tipo, ya sea en fila o en columna. Para eso selecciona item y luego un item adyacente para intercambiarlos",
}).then(() => {
   swal({
       title: "Nuevo Juego",
       text: "Selecciona una dificultad",
       buttons: {
           facil: true,
              confirm: "Normal",
              roll: {
                  text: "Dificil",
                  value: "roll",
              },
           
      },
  });
});

//Cambiar de nivel- fácil, normal, díficil

const cambiarNivel= () => {

}

//CRONOMETRO
let cronometro = 30; //esta es la variable de los segundos, o sea 30 segundos
    let tiempo = document.getElementById("tiempo");
    window.setInterval(function(){
    tiempo.innerHTML = cronometro;
    cronometro--; //esta variable es para que el tiempo disminuya, cuando es ++ es para que se sume de uno en uno
    
    },1000);

    let selectedItem = null;

//MATRIZ CON EMOJIS
const grillaDom = document.getElementById('grilla');
const grilla = [];
const arrayEmojis = ['🥑','🍄','🥕','🥦','🍅','🍆'];
const tamanioGrilla = 5;
const tamanioCelda = 100;

const crearGrilla = () => {
    //Columnas (i)
    for (let i = 0; i < tamanioGrilla; i++) {
      grilla[i] = [];
    //Filas (j)
      for (let j = 0; j < tamanioGrilla; j++) {
        const emoji = emojiAleatorio();
        grilla[i][j] = emoji;
        grillaDom.append(crearCelda(i,j,emoji));
      }
    }
  };
                
//Funcion para obtener el emoji de forma Random 
const emojiAleatorio = () => {
  const indice = Math.round(Math.random() * (arrayEmojis.length - 1));
  return arrayEmojis[indice];
};

//Función crear celda y darle estilos
const crearCelda = (columna, fila, emoji) => {
    const celda = document.createElement('div');
    celda.classList.add('celda');
    celda.innerHTML = emoji;
    celda.addEventListener('click',jugar);  

    celda.style.top = `${fila * tamanioCelda}px`;
    celda.style.left = `${columna * tamanioCelda}px`;
    celda.style.width = `${tamanioCelda - 2}px`;
    celda.style.height = `${tamanioCelda - 2}px`;
  
    celda.dataset.columna = columna;
    celda.dataset.fila = fila;

  
    return celda;
    
  };
  
  //Función jugar
  const jugar = async (e) =>{
    if(primerElemento == null){
      primerElemento = e.target;
    }
    else if (primerElemento !=null){
      segundoElemento = e.target; 
      if(adyacente(primerElemento,segundoElemento)){
        switchItems(primerElemento,segundoElemento);

    
      } else{
        primerElemento = null;
        segundoElemento = null;
      }
    }
  }
    /*//tiene que recibir un event
    if (!primerElemento){
      primerElemento = e.target
    }
    else {
     segundoElemento= e.target

     //acá resolver si los elementos son adyacentes
    }*/

  //Función ver celda
  const verCelda = (x, y) => {
    return $(`.celda[data-x="${x}"][data-y="${y}"]`);
  }

  //Función ver grilla
  const verGrilla = () => {
    verEmojis();
    twemoji.parse(document.body);
  }

  
  crearGrilla();
      
      
    


    