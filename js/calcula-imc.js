
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var alturaValida = validaAltura;
    var pesoValido = validaPeso;

    if(!pesoValido(peso)){ //! o simbolo de exclamação nega (torna falsa) a função
        pesoValido = false;
        tdImc.textContent = "Peso inválido.";
        paciente.classList.add("paciente-invalido")
    }

    if(!alturaValida(altura)){
        alturaValida = false;
        tdAltura.textContent = "Altura inválida."; 
        paciente.classList.add("paciente-invalido")
    
    }

    if(alturaValida && pesoValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc
    }
}

function calculaImc(peso,altura){
    var imc = 0 
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true
    }else{
        return false
    }
}
