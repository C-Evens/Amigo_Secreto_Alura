// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
lista_amigos=["Juan","Pedro","Maria","Ana","Luis","Pablo","Jose","Sofia","Laura","Isabel"];
console.log(lista_amigos);
function agregarAmigo(){
    let amigoAgregado=document.getElementById("amigo").value;
    lista_amigos.push(amigoAgregado);
    console.log(lista_amigos);
}