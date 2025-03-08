// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
lista_amigos=[];
actualizarAmigos();
function agregarAmigo(){
    let amigoAgregado=document.querySelector("#amigo").value;
    lista_amigos.push(amigoAgregado);
    console.log(lista_amigos);
    actualizarAmigos();
}
function actualizarAmigos(){
let ul_amigos=document.querySelector("#listaAmigos");
ul_amigos.innerHTML="";
for(let i=0;i<lista_amigos.length;i++){
    let li_amigo=document.createElement("li");
    li_amigo.textContent=lista_amigos[i];
    ul_amigos.appendChild(li_amigo);

}
}

function sortearAmigo(){
    let texto_resultado=document.querySelector("#resultado");
let numero_resultado=Math.floor(Math.random()*lista_amigos.length);
let amigo_elegido=lista_amigos[numero_resultado];

  texto_resultado.innerHTML="El amigo elegido es "+amigo_elegido;

}