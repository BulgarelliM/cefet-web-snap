// Exercício 4: Filtros na foto
// diretrizes em: https://fegemo.github.io/cefet-web/classes/js4/#interagindo-js-campos-de-escolha
// diretrizes em: https://www.w3schools.com/howto/howto_css_image_effects.asp

let filtroEscolhido = document.querySelector('#filtro-da-foto');
let imgRef = document.querySelector('.foto-anotada');

filtroEscolhido.addEventListener('change', function(event) { 
    let filtroFoto = event.currentTarget;
    imgRef.style.filter=filtroFoto.value;
});
