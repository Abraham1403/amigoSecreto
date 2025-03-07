// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let amigo;

function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
   if(amigo.trim() !== ""){   
    amigos.push(amigo);
    mostrarAmigos();
    limpiarCajaTexto();

   }else{
    alert("Por favor, inserte un nombre.");
   }
}

function mostrarAmigos(){
    let view = document.getElementById("listaAmigos");    
    view.innerHTML="";
    //muestra los amigos agregados al array
    amigos.forEach(amigo => {
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al <li>
        view.appendChild(li); // Agregar el <li> a la lista
    });
}
function sortearAmigo(){
    if(amigos.length > 0){
       let amigoSecreto= generarAmigoSecreto();
       mostrarAmigoSecreto(amigoSecreto);
       limpiarArray();
       mostrarAmigos();
    }else{
        alert("Para sortear un amigo por lo menos debe haber más de un amigo registrado");
    }
}
function mostrarAmigoSecreto(amigoSecreto){
    let vista = document.getElementById("resultado");
    vista.innerHTML="El amigo secreto sorteado es: "+amigoSecreto;
    return;

}
function limpiarArray(){
    amigos=[];

}

function generarAmigoSecreto(){
        let amigoSecreto = Math.floor(Math.random() * amigos.length);
        return amigos[amigoSecreto];
}

function limpiarCajaTexto(){
    document.getElementById("amigo").value="";
}

