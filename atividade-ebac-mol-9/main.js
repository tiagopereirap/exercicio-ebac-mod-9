$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    
    $('form').on('submit', function(e){
        e.preventDefault(); 

        const enderecoNovaTarefa = $('#nova-tarefa').val(); 

        if (enderecoNovaTarefa.trim() !== '') { 
            const novoItem = $(`
                <li style="display: none">
                    <p>${enderecoNovaTarefa}</p>
                    <button class="remover-tarefa">🗑️</button>
                </li>
            `);

            $(novoItem).appendTo('ul').fadeIn(500); 
            $('#nova-tarefa').val(''); 
        }
    });

    $(document).on('click', 'li p', function(){
        $(this).toggleClass('tarefa-concluida');
    });

    $(document).on('click', '.remover-tarefa', function(){
        $(this).parent().fadeOut(500, function(){ 
            $(this).remove();
        });
    });
});
