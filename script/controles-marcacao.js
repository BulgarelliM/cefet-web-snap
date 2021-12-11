let checkboxStatus = document.querySelector('#visibilidade-das-marcacoes');
let marcacoes = document.querySelectorAll('.marcacao');

marcacoes.forEach(atualizaControles);

// Sempre que o status mudar, o evento e acionado
// Diretrizes em https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
checkboxStatus.addEventListener('change', (e) => {
    let status = e.target.checked;
    console.log('status '+status);
    if (status){
      // Oculta marcacoes
      let marcacoes = document.querySelector('body');
      marcacoes.classList.add("marcacoes-ocultas");
    }
    else{
      console.log('com marcacoes');
      let marcacoes = document.querySelector('.marcacoes-ocultas');
      marcacoes.classList.remove("marcacoes-ocultas");
    }
});


function atualizaControles(marcacaoTodas) {
  marcacaoTodas.addEventListener('click', function(event) {
    // remove a classe 'selecionada'. Diretrizes em: https://fegemo.github.io/cefet-web/classes/js2/#30
    for (let i = 0; i < marcacoes.length; i++) {
    	marcacoes[i].classList.remove('selecionada');
    };
    let marcacao = event.currentTarget;
    marcacao.classList.add('selecionada');
    console.log(marcacao.classList);

    // Pega valores
    let marcacaoX = parseInt((marcacao.style.left).substring(0,(marcacao.style.left).length - 2));
    let marcacaoY = parseInt((marcacao.style.top).substring(0,(marcacao.style.top).length - 2));
    let marcacaoLargura = parseInt((marcacao.style.width).substring(0,(marcacao.style.width).length - 2)); 
    let marcacaoAltura = parseInt((marcacao.style.height).substring(0,(marcacao.style.height).length - 2));
    let marcacaoTitulo = marcacao.getAttribute("data-titulo");
    let marcacaoConteudo = marcacao.getAttribute("data-conteudo");
    let marcacaoCor = marcacao.getAttribute("data-cor");
    
    if (marcacao.classList.contains('.formato-oval')){
      let radios = document.getElementsByName("formato-da-marcacao");
      for (let i = 0; i < radios.length; i++) {
        if(radios[i].value == 'formato-oval'){
          radios[i].checked = true;
        }
        else{
          radios[i].checked = false;
        }
      };
    }
    else{
      let radios = document.getElementsByName("formato-da-marcacao");
      for (let i = 0; i < radios.length; i++) {
        radios[i].checked = (radios[i].value == 'formato-oval') ? false:true;
      };
    }

    let xMarcacao = document.querySelector('#x-da-marcacao');
    let yMarcacao = document.querySelector('#y-da-marcacao');
    let larguraMarcacao = document.querySelector('#largura-da-marcacao');
    let alturaMarcacao = document.querySelector('#altura-da-marcacao');
    let tituloMarcacao = document.querySelector('#titulo-da-marcacao');
    let conteudoMarcacao = document.querySelector('#conteudo-da-marcacao');
    let corMarcacao = document.querySelector('#cor-da-marcacao');
    xMarcacao.value=marcacaoX;
    yMarcacao.value=marcacaoY;
    larguraMarcacao.value=marcacaoLargura;
    alturaMarcacao.value=marcacaoAltura;
    tituloMarcacao.value=marcacaoTitulo;
    conteudoMarcacao.innerHTML=marcacaoConteudo;
    corMarcacao.value = marcacaoCor;
  });
}
