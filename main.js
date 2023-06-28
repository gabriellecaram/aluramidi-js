//tem que usar a função querySelector para encontrar o botão e então poder atribuir funcionalidades a ele.
// .tecla pra selecionar pela classe
// #som_tecla_pom selecionar pelo ID

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick=tocaSomPom;
const listadeTeclas = document.querySelectorAll('.tecla');

