document.getElementById('formConverter').addEventListener('submit' , function(event){
    event.preventDefault();

    conversor()
});




function conversor(){
const valor = document.getElementById('valorCelsius').value;
const conversao = valor * (9/5) + 32;

document.getElementById('resultado').innerText = `C° ${valor} = F° ${conversao}`

}