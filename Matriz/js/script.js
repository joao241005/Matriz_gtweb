/* 
var --> variavel qu epode ser usada a qualquier momento
let --> variavel que só é usada em uma função
const --> NÃO CONSEGUE MUDAR
*/  

//preventDefault --> não deixa atualizar o formulario (pagina) 

const bt = document.querySelector("#envia")

bt.addEventListener("click", function(e){
    e.preventDefault()
    const numero = document.querySelector("#numero")
    const valor = numero.value
    console.log(valor)
    let resposta = document.querySelector("#resp").innerHTML = Number(valor)*2
})