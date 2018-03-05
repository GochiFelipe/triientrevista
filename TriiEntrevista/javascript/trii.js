$(document).ready(function(){
    $(".estilo-formulario").focusin(
        function(){
            $(this).addClass("clicado");
            //$(this).addClass("input-clicado");
        }
    );

    $(".estilo-formulario").focusout(
        function(){
            $(this).removeClass("clicado");
            //$(this).removeClass("input-clicado");
        }
    );

    $("button").click(
        function(){
            $(this).removeClass(".sombra-botao");
        }
    );

    $("form").submit(function(event){
        if($(".nome").val() == null || $(".nome").val() == ""){
            event.preventDefault();
            $("#erro-nome").removeClass("invisivel");
            $(".nome").addClass("erro-input");
        }else{
            $("#erro-nome").addClass("invisivel");
            $(".nome").removeClass("erro-input");
        }

        if($(".email").val() == null || $(".email").val() == ""){
            event.preventDefault();
            $("#erro-email").removeClass("invisivel");
            $(".email").addClass("erro-input");
        }else{
            $("#erro-email").addClass("invisivel");
            $(".email").removeClass("erro-input");
        }

        if($(".telefone").val() == null || $(".telefone").val() == ""){
            event.preventDefault();
            $("#erro-telefone").removeClass("invisivel");
            $(".telefone").addClass("erro-input");
        }else{
            $("#erro-telefone").addClass("invisivel");
            $(".telefone").removeClass("erro-input");
        }

        if($(".selecionar").val() == null || $(".selecionar").val() == ""){
            event.preventDefault();
            $("#erro-selecionar").removeClass("invisivel");
            $(".selecionar").addClass("erro-input");
        }else{
            $("#erro-selecionar").addClass("invisivel");
            $(".selecionar").removeClass("erro-input");
        }

        if($(".mensagem-formulario").val() == null || $(".mensagem-formulario").val() == ""){
            event.preventDefault();
            $("#erro-mensagem").removeClass("invisivel");
            $(".mensagem-formulario").addClass("erro-input");
        }else{
            $("#erro-mensagem").addClass("invisivel");
            $(".mensagem-formulario").removeClass("erro-input");
        }
        $(".botao").addClass("sombra-botao");
    })
})