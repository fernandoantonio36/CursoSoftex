const readline = require('readline-sync');
function calculaNota(){
    
    var alunos = 0;
    var maiorMediaAluno ="";
    var maiorMedia = 0;
    while(alunos<4){
        var aluno = readline.question('Digite o nome do aluno');
        var nota1 = readline.questionInt('Nota 1:');
        var nota2 = readline.questionInt('Nota 2:');
        alunos++;
        media = (nota1+nota2)/2;
        if(media>maiorMedia) {
            maiorMedia = media;
            maiorMediaAluno = aluno;
        }
    }
    console.log('O aluno que obteve a maior nota foi:\n')
    console.log(maiorMediaAluno)
    console.log('\nSua nota foi:\n')
    console.log(maiorMedia)
}

calculaNota();