

function start() {
  createBoard();
  operacoes();
}



function operacoes() {
  somar();
  subtrair();
  multiplicar();
  dividir();
}

function somar(operando1, operando2) {
  return operando1 + operando2;
}

function subtrair(operando1, operando2) {
  return operando1 - operando2;
}

function multiplicar(operando1, operando2) {
  return operando1 * operando2;
}

function dividir(operando1, operando2) {
  return operando1 / operando2;
}

function potencia(operando1, operando2) {
  return operando1 ** operando2;
}

start();
