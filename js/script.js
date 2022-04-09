const h1 = document.querySelector("h1");
const pacientes = document.querySelectorAll(".paciente");
const btn = document.querySelector('#adicionar-paciente');
const tabela = document.querySelector('#tabela-pacientes');
const mensagemErro = document.querySelector('#mensagem-erro');

function imcFunc(peso, altura, paciente, tdImc) {
    let pesoEhValido = true;
    let alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Invalido!");
        pesoEhValido = false;
    }

    if (altura <= 0 || altura >= 3.0) {
        console.log("Altura Invalida!");
        alturaEhValido = false;
    }

    if (alturaEhValido && pesoEhValido) {
        const imc = peso / (altura * altura);
        paciente.classList.remove('paciente-invalido');
        return tdImc.textContent = imc.toFixed(2);
    } else {
        paciente.classList.add('paciente-invalido');
        return tdImc.textContent = "[ERRO]";
    }
}    'O IMC do(a)'

for (let i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    const tdPeso = document.querySelector('.info-peso');
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc");
    const imc = peso / (altura * altura);
    tdImc.textContent = imc;    

    imcFunc(peso, altura, paciente, tdImc);
}

function pesoNegativo(peso){
    if(peso < 0){
        const li = document.createElement('li');
        li.textContent = 'Peso invalido';
        mensagemErro.appendChild(li);
        fadeOutMensagem();
    }
}

function alturaNegativa(altura) {
    if(altura < 0){
        const li = document.createElement('li');
        li.textContent = 'Altura invalida';
        mensagemErro.appendChild(li);
        fadeOutMensagem();
    }
}

function gorduraNegativa(gordura) {
    if(gordura < 0){
        const li = document.createElement('li');
        li.textContent = 'Gordura invalida';
        mensagemErro.appendChild(li);
        fadeOutMensagem();
    }
}

function semNome(nome) {
    if(nome === ''){
        mensagemErro.innerHTML += '<li>Campo Nome Invalido</li>';
    }
}

function semPeso(peso) {
    if(peso === ''){
        mensagemErro.innerHTML += '<li>Campo Peso Invalido</li>';
    }
}

function semAltura(altura) {
    if(altura === ''){
        mensagemErro.innerHTML += '<li>Campo Altura Invalido</li>';
    }
}

function semGordura(gordura) {
    if(gordura === ''){
        mensagemErro.innerHTML += '<li>Campo Gordura Invalido</li>';
    }
}

function fadeOutMensagem() {
    mensagemErro.style.display = 'block'
    mensagemErro.style.opacity = '1';
    setTimeout(() => {
        mensagemErro.style.opacity = '0';
    }, 3000)
    mensagemErro.addEventListener('transitionend', () => {
        mensagemErro.style.display = 'none';
        mensagemErro.innerHTML = '';
    })
}



btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const form = document.querySelector('#form-adiciona');

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    if(nome === '' || peso === '' || altura === '' || gordura === '') {
        fadeOutMensagem();
        semNome(nome);
        semPeso(peso);
        semAltura(altura);
        semGordura(gordura);

    }else{   

        if(peso < 0 || altura < 0 || gordura < 0){
            pesoNegativo(peso);
            alturaNegativa(altura);
            gorduraNegativa(gordura);
        }else{
            const pacienteTr = document.createElement('tr');
            pacienteTr.classList.add('paciente');
        
            let pesoEhValido = true;
            let alturaEhValido = true;
        
            function imcBtn() {
                if (peso <= 0 || peso >= 1000) {
                    console.log("Peso Invalido!");
                    pesoEhValido = false;
                }
            
                if (altura <= 0 || altura >= 3.0) {
                    console.log("Altura Invalida!");
                    alturaEhValido = false;
                }
            
                if (alturaEhValido && pesoEhValido) {
                    const imc = peso / (altura * altura);
                    pacienteTr.classList.remove('paciente-invalido');
                    let imcTd = imc.toFixed(2);
                    return imcTd;
                } else {
                    pacienteTr.classList.add('paciente-invalido');
                    let imcTd = "[ERRO]";
                    return imcTd;
                }
        
            }
        
        
            pacienteTr.innerHTML = `
                <td class="info-nome">${nome}</td>
                <td class="info-peso">${peso}</td>
                <td class="info-altura">${Number(altura).toFixed(2)}</td>
                <td class="info-gordura">${gordura}</td>
                <td class="info-imc">${imcBtn()}</td>
            `
        
            form.reset();
            mensagemErro.innerHTML = ''
        
            tabela.appendChild(pacienteTr);
        }
    }

})
