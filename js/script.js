const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector("#kg");
    const peso = Number(inputPeso.value);

    const inputAltura = e.target.querySelector("#m");
    const altura = Number(inputAltura.value);

    if (peso == '' || altura == '') {
        const paragrafo1 = document.createElement("p");
        paragrafo1.classList.add("paragrafo1");
        document.getElementById("erro").appendChild(paragrafo1).innerHTML = `O campo de "peso" ou "altura" não foi preenchido corretamente !`;
    } else if (peso <= 0 || altura <= 0) {
        const paragrafo2 = document.createElement("p");
        paragrafo2.classList.add("paragrafo2");
        document.getElementById("erro").appendChild(paragrafo2).innerHTML = `Valor de "peso" ou "altura" inválido !`;
    } else {
        const calcimc = calculoIMC(peso, altura);
        const paragrafo3 = document.createElement("p");
        paragrafo3.classList.add("paragrafo3");
        document.getElementById("imc").appendChild(paragrafo3).innerHTML = `<strong>IMC = </strong> ${(calcimc).toFixed(2)}`;

        const classimc = classificacaoIMC();
        const paragrafo4 = document.createElement("p");
        paragrafo4.classList.add("paragrafo4");
        document.getElementById("classimc").appendChild(paragrafo4).innerHTML = classimc;
    }
});

function calculoIMC(a, b) {
    let c = a / (b * b);
    calcimc = c;
    return calcimc;
}

function classificacaoIMC() {
    let imc = calcimc;
    if (imc < 18.5) {
        classimc = `<strong>Classificação: </strong> Abaixo do peso ideal`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        classimc = `<strong>Classificação: </strong> Peso ideal`;
    } else if (imc >= 25.0 && imc <= 29.9) {
        classimc = `<strong>Classificação: </strong> Sobrepeso`;
    } else if (imc >= 30.0 && imc <= 34.9) {
        classimc = `<strong>Classificação: </strong> Obesidade grau I`;
    } else if (imc >= 35.0 && imc <= 39.9) {
        classimc = `<strong>Classificação: </strong> Obesidade grau II`;
    } else {
        (imc >= 40);
        classimc = `<strong>Classificação: </strong> Obesidade grau III`;
    }
    return classimc;
}

function apagar() {
    while (document.querySelector("p")) {
        var p = document.querySelector("p");
        p.parentElement.removeChild(p);
    }
}
