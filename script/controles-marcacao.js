let checkboxStatus = document.querySelector('#visibilidade-das-marcacoes');

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