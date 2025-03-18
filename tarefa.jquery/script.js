$(document).ready(function() {

    $('#AdicionarTarefa').on('submit', function(e) {
    e.preventDefault(); 

const taskText = $('#Entrada').val();


const taskItem = $('<li>').text(taskText);
$('#listadetarefa').append(taskItem);


    $('#Entrada').val('');
    });


    $('#listadetarefa').on('click', 'li', function() {
    $(this).toggleClass('completed');
    });
});
