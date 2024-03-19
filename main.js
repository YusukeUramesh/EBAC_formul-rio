$(document).ready(function() {

    function validarNomeSobrenome() {
        var nomeCompleto = $('#nome').val();
        
        if (nomeCompleto.trim() === '') {
            alert('Por favor, insira seu nome completo.');
            return false;
        }
        
        var partesNome = nomeCompleto.split(' ');
        
        if (partesNome.length < 2) {
            alert('Por favor, insira seu nome e sobrenome.');
            return false;
        }
        
        return true;
    }
    
    $('#form').submit(function() {
        return validarNomeSobrenome();
    });
    
    
    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000000000-00')

    $('#cep').mask('00000-000')

    $('#numero').mask('0000000')

    $('#checkbox').change(function() {
        if ($(this).is(':checked')) {
            $('#numero').attr('placeholder', ' SN');
            $('#numero').prop('disabled', true);

        } else {
            $('#numero').attr('placeholder', '');
            $('#numero').prop('disabled', false);
        }
    });

})