$(document).ready(function () {
    $("#phone").mask("(00) 0000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    
    $("#registrationForm").submit(function (event) {
        event.preventDefault();
      
        alert("Formulário enviado com sucesso!");
    });
});