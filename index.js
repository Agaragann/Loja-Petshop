var elementosDuvida = document.querySelectorAll('.duvida')
//Selecionei uma lista de duvidas e guardei na variavel

elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
        
    })


})
// Executar uma função para cada duvida
