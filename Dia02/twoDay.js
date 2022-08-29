const nome = prompt('Qual o seu nome?');
const idade = prompt('Quantos anos você tem?');
const linguagemP = prompt('Qual linguagem de programação você está estudando?');

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagemP + "!");

pergunta();

function pergunta() {
  extra = prompt('Você gosta de estudar ' + linguagemP +'? Responda com o número 1 para SIM ou 2 para NÃO.');

  switch (extra) {
    case '1':
      alert('Ahh que pena... Já tentou aprender outras linguagens?');
      break;
    case '2':
      alert('Muito bom! Continue estudando e você terá muito sucesso.');
      break;
    default:
      alert('Opção invalida!');
      pergunta();
  }
}
