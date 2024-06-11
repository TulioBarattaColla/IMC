function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    if (isNaN(height) || isNaN(weight)) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }
    const imc = weight / (height * height);
    const resultElement = document.getElementById('result');
    let classification = '';
    
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classification = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classification = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.9) {
        classification = 'Obesidade Grau II';
    } else {
        classification = 'Obesidade Grau III';
    }
    
    resultElement.innerHTML = `Seu IMC é <span>${imc.toFixed(2)}</span> (${classification})`;
}