const form = document.getElementById('form');
const resultado = document.querySelector('#value');

function calcNotas() { 
    const notelin = parseFloat(document.querySelector('#linguagens').value);
    const notehum = parseFloat(document.querySelector('#humanas').value);
    const notenat = parseFloat(document.querySelector('#natureza').value);
    const notemate = parseFloat(document.querySelector('#matematica').value);
    const notered = parseFloat(document.querySelector('#redacao').value);

    const pesolin = parseFloat(document.querySelector('#peso1').value);
    const pesohum = parseFloat(document.querySelector('#peso2').value);
    const pesonat = parseFloat(document.querySelector('#peso3').value);
    const pesomate = parseFloat(document.querySelector('#peso4').value);
    const pesored = parseFloat(document.querySelector('#peso5').value);

    const resultadoFinal = ((notelin * pesolin) + (notehum * pesohum) + (notenat * pesonat) + (notemate * pesomate) + (notered * pesored)) / (pesolin + pesohum + pesonat + pesomate + pesored);

    resultado.innerHTML = resultadoFinal.toFixed(2);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    calcNotas();
});