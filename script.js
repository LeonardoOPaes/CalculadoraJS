const visorCalc = document.getElementById('valorVisor')

let novoNumero = true
let primeiroNumero = ""
let ultimoNUmero = ""
let operadores = ""
let soma = ""

function mostrarVisor(numero) {
  if (novoNumero) {
    visorCalc.textContent = numero
    novoNumero = false
  } else{
    visorCalc.textContent += numero
  }
}

function limparVisor() {
  visorCalc.innerHTML = ""
}

function adicao(operador) {
 if (novoNumero == false) {
  calculos()
  operadores = operador
  primeiroNumero = visorCalc.textContent
  console.log(operador)
  novoNumero = true
 }
}

function subtracao(operador) {
  if (novoNumero == false) {
    calculos()
    operadores = operador
    primeiroNumero = visorCalc.textContent
    console.log(primeiroNumero)
    novoNumero = true  
    console.log(operador)
  }
}
function multiplicacao(operador) {
  if (novoNumero == false) {
    calculos()
    operadores = operador
    primeiroNumero = visorCalc.textContent
    console.log(primeiroNumero)
    novoNumero = true
    console.log(operador)
  }
}
function divisao(operador) {
  if (novoNumero == false) {
    calculos()
    operadores = operador
    primeiroNumero = visorCalc.textContent
    console.log(primeiroNumero)
    novoNumero = true
    console.log(operador)
  }
}

const btnTotal = document.getElementById('total')
btnTotal.addEventListener('click', calculos)

function calculos() {
  ultimoNUmero = parseFloat(visorCalc.textContent) 
  if (operadores == '+') {
    soma = parseFloat(primeiroNumero) + parseFloat(ultimoNUmero)
    visorCalc.textContent = soma
    novoNumero = true
  } else if (operadores == '-'){
    soma = parseFloat(primeiroNumero) - parseFloat(ultimoNUmero) 
    visorCalc.textContent = soma
    novoNumero = true
  }else if (operadores == '/'){
    soma = parseFloat(primeiroNumero) / parseFloat(ultimoNUmero)
    visorCalc.textContent = soma
    novoNumero = true
  }else if (operadores == 'x'){
    soma = parseFloat(primeiroNumero) * parseFloat(ultimoNUmero) 
    visorCalc.textContent = soma 
    novoNumero = true
  }
}

function backspace() {
  visorCalc.textContent = visorCalc.textContent.slice(0,1)
}

function zerarTudo() {
  novoNumero = true
  primeiroNumero = ""
  ultimoNUmero = ""
  operadores = ""
  visorCalc.textContent = ""
  soma = ""
}

function sinais() {
  const sinal = visorCalc.textContent * -1
  visorCalc.textContent = sinal
}

