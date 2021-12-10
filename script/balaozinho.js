//  #balaozinho deve aparecer quando o mouse está sobre uma .marcacao
let balaozinho = document.querySelector('#balaozinho');
let conjuntoDeMarcacoes = document.querySelectorAll('.marcacao');

function showInfo(marcacaoUnitaria) {
    marcacaoUnitaria.addEventListener('mouseover', function(event) { 
        let elemento = event.currentTarget; // elemento que disparou a acao
        // Diretrizes em https://developer.mozilla.org/pt-BR/docs/Web/API/element/getAttribute
        let tituloDoElemento = elemento.getAttribute("data-titulo");
        let conteudoDoElemento = elemento.getAttribute("data-conteudo");
        let corElemento = elemento.getAttribute("data-cor");
        
        // Diretrizes em https://fegemo.github.io/cefet-web/classes/js4/#7
        balaozinho.style.backgroundColor = corElemento;

        // Conforme orientado no readme. Diretrizes em https://fegemo.github.io/cefet-web/classes/js3/#8
        balaozinho.innerHTML = `<h2>${tituloDoElemento}</h2>` ;
        balaozinho.innerHTML = balaozinho.innerHTML + `<h2>${conteudoDoElemento}</h2>`;
    });
    marcacaoUnitaria.addEventListener('mouseout', function(event) {
        // Dica dada no FAQ
        balaozinho.innerHTML = '';
    });
    marcacaoUnitaria.addEventListener('mousemove', function(event) {
        let valorX = parseInt(event.pageX);
        let valorY = parseInt(event.pageY);
        balaozinho.style.left =  valorX+ 'px';
        balaozinho.style.top =  valorY+ 'px';
        console.log(`valor X: ${valorX} | valorY: ${valorY}`);
    });
};

conjuntoDeMarcacoes.forEach(showInfo);