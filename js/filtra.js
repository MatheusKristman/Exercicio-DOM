const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function() {
    console.log(this.value);
    const pacientes = document.querySelectorAll('.paciente');

    if(this.value.length > 0){
        for (let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i]
            const tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            const expressao = new RegExp(this.value,'i');
            if(!expressao.test(nome)){
                paciente.classList.add('paciente-invisivel');
            }else{
                paciente.classList.remove('paciente-invisivel');
            }
        }
    }else{
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove('paciente-invisivel');
        }
    }

})