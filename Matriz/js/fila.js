/* 
var --> variavel qu epode ser usada a qualquier momento
let --> variavel que só é usada em uma função
const --> NÃO CONSEGUE MUDAR
*/  

//preventDefault --> não deixa atualizar o formulario (pagina) 
var fila = []
const add = document.querySelector("#add")
const rm = document.querySelector("#rm")
//const bt = document.querySelector("#envia")



add.addEventListener("click", function(e){
    e.preventDefault()
    dado = document.querySelector("#numero").value
    fila.push(dado)
    console.log(fila)
    let resposta = document.querySelector("#resp").innerHTML = fila
    return false
})
/*
bt.addEventListener("click", function(e){
    e.preventDefault()
    dado = document.querySelector("#numero").value
    const valor = numero.value
    console.log(valor)
    let resposta = document.querySelector("#resp").innerHTML = Number(valor)*2
})
*/
rm.addEventListener("click", function(e){
    e.preventDefault()
   fila.shift()
   document.querySelector("#resp").innerHTML = fila
})

