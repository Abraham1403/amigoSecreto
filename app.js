// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let amigo;
//función para agregar amigos a un array
function agregarAmigo(){
    //valor obtenido de la caja de texto amigo
    amigo = document.getElementById("amigo").value;
    //validación de la caja de texto que no se encuentre vacía
   if(amigo.trim() !== ""){   
    //agrega el valor obtenido de la caja de texto al array amigos
    amigos.push(amigo);   
    mostrarAmigos();
    limpiarCajaTexto();

   }else{
    alert("Por favor, inserte un nombre.");
   }
}
//función para mostrar los amigos agregados en el array
function mostrarAmigos(){

    let lista = document.getElementById("listaAmigos");    
    lista.innerHTML="";
    //muestra los amigos agregados al array
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo; 
        lista.appendChild(li);
    });
}
//funcion que activa el sorteo del amigo secreto
function sortearAmigo(){
    //estructura de control que avalida que el array de los amigos secretos no se encuentren vacíos
    if(amigos.length > 0){
       let amigoSecreto= generarAmigoSecreto();

       mostrarAmigoSecreto(amigoSecreto);
       limpiarArray();
       mostrarAmigos();
    }else{
        alert("Para sortear un amigo por lo menos debe haber más de un amigo registrado");
    }
}
 //funcion que concatena y muestra el resultado de la operación random del amigo secreto 
function mostrarAmigoSecreto(amigoSecreto){
    let vista = document.getElementById("resultado");
    vista.innerHTML="El amigo secreto sorteado es: "+amigoSecreto;
    return;

}

//funcion que limpia el array de amigos
function limpiarArray(){
    amigos=[];

}
//funcion que genera la operación matematica para calcular mediante un random el amigo secreto seleccionado
function generarAmigoSecreto(){
        let amigoSecreto = Math.floor(Math.random() * amigos.length);
        return amigos[amigoSecreto];
}
//funcion que limpia la caja de texto
function limpiarCajaTexto(){
    document.getElementById("amigo").value="";
}

