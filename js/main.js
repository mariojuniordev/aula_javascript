/*var nome = "Mário Júnior";
var idade = 5;
var idade2 = 3;
var frase = "Japão é o melhor time do mundo";

//alert(`${nome} tem ${idade} anos`);

//alert(idade + idade2);

console.log(nome);
console.log(idade * idade2);
// var.replace("String a ser substituida", "String substituta") 
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())*/

//***ARRAYS E DICIONÁRIOS***

/*var lista = ["maçã", "pêra", "laranja"];
//x.pop() remove o últime elemento d alista
//lista.pop();
//x.push("novo elemento") adiciona um novo elemento à lista na última posição 
//lista.push("uva");
console.log(lista);

//lista.length retorna o número de elementos da lista
//console.log(lista.length);

//passando uma lista p/ string a listra perde a característica de lista
console.log(lista.toString())

//lista.join(" - ") retorna a lista em forma de string sendo separada pelo elemento digitado como parâmetro
console.log(lista.join(" | "))*/

/*var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];

console.log(frutas[0].nome, frutas[0].cor)
console.log(frutas[1].nome, frutas[1].cor)*/

//***ESTRUTURAS CONDICIONAIS***

/*var idade = prompt('Qual a sua idade?')
if (idade >= 18) {
  console.log("Você é maior de idade!!!")
} else {
  console.log("Você é menor de idade!!!")
}*/

//***ESTRUTURAS DE REPETIÇÃO (LOOPS)***
//WHILE
/*var count = 0;
while(count <=5){
  console.log(count);
  count++;
};*/

//FOR

/*var count;
for (count = 0; count <= 5; count++){
  console.log(count);
};*/

/*var d = new Date();
//alert(d.getMinutes());
//alert(d.getDay());
//alert(d.getHours());
alert(d.getDate());
alert(d.getMonth() + 1);*/

//FUNÇÕES
/*
function soma(n1, n2){
  return n1 + n2;
}

function validarIdade(idade){
  var validar;
  if(idade >= 18){
    validar = true;
  } else {
    validar = false;
  }

  console.log(validar);

}

alert(soma(5, 10));

var idade = prompt("Qual a sua idade?")
console.log(validarIdade(idade));
*/

function botao(){
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!!!";
  //console.log(document.getElementById("agradecimento"))
  //alert("Você clicou no botão!!!")
}

function redirecionar(){
  //window.open("https://digitalinnovation.one/");
  window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!!"
  elemento.innerHTML = "Obrigado por passar o mouse!!!"
  //alert("trocar texto!!!")
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui!!!"
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!!!"
}

function load(){
  alert("Página Carregada!!!")
}

function funcaoChange(elemento) {
  console.log(elemento.value)
}