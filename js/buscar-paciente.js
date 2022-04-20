var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscar paciente..")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
        
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => { //adicionar cada paciente por vez
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");

        }
        
        
        })
    xhr.send();

})