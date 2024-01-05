$(document).ready(function () {
    document.querySelector('header button')


    document.querySelector('header button').addEventListener('click', () =>{

    })

    // ou

    $('header button').click(() => {
        $('form').slideDown();
    })

    $('#last').click(() => {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoDeImagem = $('#tarefa').val();
        const novoItem = $(`<li> ${enderecoDeImagem} </li>`)
        

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn();
        $('#tarefa').val(' ');
        
    })


})
    

$()