var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
        event.preventDefault();
        
        var form = document.querySelector("#form-adiciona")
        var paciente = informacoesDoPaciente(form);

        var erros = validaPaciente(paciente);
        
        if(erros.length > 0){
            exibeMensagemDeErro(erros);
            return;
        }
        
        adicionaPacienteNaTabela(paciente);

        form.reset();

        var mensagensErro = document.querySelector("#mensagem-erro");
        mensagensErro.innerHTML = "";
        

})

function adicionaPacienteNaTabela(paciente){

    var pacienteTr = montaTr(paciente);        
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erros){
        var li = document.createElement("li");
        li.textContent = erros
        ul.appendChild(li);
    });

}

function informacoesDoPaciente(form){ //puxa os valores inseridos no formulario e salva nas variaveis

    var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr"); //cria a tag <tr> no html para que a nova linha apareça na pagina
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso,"info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");

    pacienteTr.appendChild(nomeTd);  //funcao appendChild faz a tag mãe receber as tags filhas
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
    
}

function montaTd(valor, classe){

    var td = document.createElement("td"); 
    td.classList.add(classe);
    td.textContent = valor;

    return td;

}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo nome não pode estar em branco.");
    }
    if(paciente.peso.length == 0){
        erros.push("O campo peso não pode estar em branco.");
    }
    if(paciente.altura.length == 0){
        erros.push("O campo altura não pode estar em branco.")
    }
    if(paciente.gordura.length == 0){
        erros.push("O campo gordura não pode estar em branco.")
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }
    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros
}