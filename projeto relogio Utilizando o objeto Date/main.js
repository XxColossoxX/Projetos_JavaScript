function atualizarImediato(){


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-br', { dateStyle: 'full' , timeStyle: 'full'},);
};

atualizarImediato();

setInterval(atualizarImediato, 1000);