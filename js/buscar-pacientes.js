const btnAdicionar = document.querySelector('#buscar-pacientes');
const erroAjax = document.querySelector('#erro-ajax');

btnAdicionar.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            erroAjax.classList.add('invisivel');
            const resposta = xhr.responseText;
            console.log(typeof resposta);
            const pacientes = JSON.parse(resposta);
            console.log(pacientes)
            console.log(pacientes[0].nome);
            pacientes.forEach((paciente) => {
                const pacienteTr = document.createElement('tr');
                pacienteTr.classList.add('paciente');
                pacienteTr.innerHTML = `
                    <td class="info-nome">${paciente.nome}</td>
                    <td class="info-peso">${paciente.peso}</td>
                    <td class="info-altura">${Number(paciente.altura).toFixed(2)}</td>
                    <td class="info-gordura">${paciente.gordura}</td>
                    <td class="info-imc">${paciente.imc}</td>
                `
    
                tabela.appendChild(pacienteTr);
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);            
            erroAjax.classList.remove('invisivel');
        }        
    });
    xhr.send();
})