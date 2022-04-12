const pac = document.querySelectorAll('.paciente');

const tab = document.querySelector('#tabela-pacientes');

tab.addEventListener('dblclick' ,function(e) {
    e.target.parentNode.classList.add('fadeOut');
    setTimeout(function(){
        e.target.parentNode.remove();
    }, 1000)

    paiDoAlvo.remove();
})

// pac.forEach(function(paciente) {
//     paciente.addEventListener('dblclick', function() {
//         console.log('clickido no double click');
//         this.remove();
//     })
// })