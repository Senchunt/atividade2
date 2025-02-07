//efeito de esconder formulário de cadastro

$(document).ready(function(){

// como descrito abaixo reduz muito o código e ajuda a simplificar
//  document.getElementById("botao-cadastrar").click()
    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");  // a function slideToggle faz tanto a função "show" ou a função "hide".
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();

    });
});
