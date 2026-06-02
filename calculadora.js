function calcularIMC(){
    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    //Processamento
    let imc = peso / (altura * altura);

    
    //Saída
    document.getElementById("resultado").textContent = "IMC: " + imc.toFixed(2);

    //Classificação do IMC 
    if (imc < 18.5) {
        document.getElementById("classificacao").textContent = "Classificação: Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("classificacao").textContent = "Classificação: Peso normal";
    } else if (imc >= 25 && imc < 30) {
        document.getElementById("classificacao").textContent = "Classificação: Sobrepeso";
    } else {
        document.getElementById("classificacao").textContent = "Classificação: Obesidade";
    }
}



