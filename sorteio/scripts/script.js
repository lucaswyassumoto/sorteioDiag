function sortearNumeros() {
    var number = parseInt(document.getElementById('number').value);
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);

    if (isNaN(number) || isNaN(number1) || isNaN(number2)) {
        alert("Por favor, insira valores válidos em todos os campos!");
        return;
    }

    if (number1 >= number2) {
        alert("O primeiro valor deve ser menor que o segundo!");
        return;
    }

    var numerosSorteados = [];
    while(numerosSorteados.lenght < number) {
        var numero = Math.Floor(Math.Random() * (number2 - number1 + 1)) + number1;
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }

    var url = "index2.html?numeros=" + numerosSorteados.join(",");
    window.location.href = url;
}