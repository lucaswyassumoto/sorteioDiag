window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var numerosSorteados = urlParams.get('numeros').split(",");
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<h2>Números sorteados:</h2>";
    for (var i = 0; i <numerosSorteados.lenght; i++) {
        resultadoDiv.innerHTML += numerosSorteados[i] + "<br>";
    }
}