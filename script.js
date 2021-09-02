const visorCalc = document.getElementById('valorVisor')

let novosNumeros = ''
let novoNumero = true
let primeiroNumero = ""
let ultimoNUmero = ""
let operadores = ""
let soma = ""

function mostrarVisor(numero) {
  if (novoNumero | novosNumeros == true) {
    visorCalc.textContent = numero
    novoNumero = false
    novosNumeros = false
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
  novoNumero = true
  operadores = operador
  primeiroNumero = visorCalc.textContent
 }
}

function subtracao(operador) {
  if (novoNumero == false) {
    calculos()
    novoNumero = true
    operadores = operador
    primeiroNumero = visorCalc.textContent
  }
}
function multiplicacao(operador) {
  if (novoNumero == false) {
    calculos()
    novoNumero = true
    operadores = operador
    primeiroNumero = visorCalc.textContent
  } 

}
function divisao(operador) {
  if (novoNumero == false) {
    calculos()
    novoNumero = true
    operadores = operador
    primeiroNumero = visorCalc.textContent
  }
}

const btnTotal = document.getElementById('total')
btnTotal.addEventListener('click', btnIgual)

function btnIgual() {
  calculos()
  operadores = ''
  novoNumero = false
  novosNumeros = true
}

function calculos() {
  if (operadores != '') {
    ultimoNUmero = parseFloat(visorCalc.textContent) 
    novoNumero = true
    const resultado = eval (`${primeiroNumero} ${operadores} ${ultimoNUmero}`)
    visorCalc.textContent = resultado
  }
}

function backspace() {
  visorCalc.textContent = visorCalc.textContent.slice(0, -1)
}

function zerarTudo() {
  novoNumero = true
  primeiroNumero = ""
  ultimoNUmero = ""
  operadores = ""
  visorCalc.textContent = "0"
  soma = ""
}

function sinais() {
  if (!visorCalc.textContent == '') {
    const sinal = visorCalc.textContent * -1
    visorCalc.textContent = sinal
  }

}

function virgula(){
  if (!visorCalc.textContent.includes('.')) {
    if (visorCalc.textContent == '') {
      visorCalc.textContent = '0,'.replace(',','.')
      novoNumero = false
    } else{
      visorCalc.textContent += ','.replace(',','.')
    }
  }
  
}
