//VENTANAS MODALES
swal({ 
  title: " ¡Bienvenida!",
  text:"Tu objetivo es juntar tres o mas items del mismo tipo, ya sea en fila o en columna. Para eso selecciona item y luego un item adyacente para intercambiarlos",
}).then(() => {
   swal({
       title: "Nuevo Juego",
       text: "Seleccina una dificultad",
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

//CRONOMETRO
let chronometer = 30; //esta es la variable de los segundos, o sea 30 segundos
    let time = document.getElementById("time");
    window.setInterval(function(){
    time.innerHTML = chronometer;
    chronometer--; //esta variable es para que el tiempo disminuya, cuando es ++ es para que se sume de uno en uno
    
    },1000); // esos 2000 son equivale a un segundo

    let selectedItem = null;

//MATRIZ CON EMOJIS
let emojis = ;//?
const matriz = (tamaño) =>{
  for(let i = 0 ; i < tamaño; i++ ){
    let filas = [];
    for (let j = 0 ; j < tamaño; j++)
    const celdas= Math.round(Math.random()*(emojis.length-1));//

  }
}
      
      
    


    