var peso, altura;
var bmi;
var result, category;

function calculateBMI() {
    altura = document.getElementById("height").value;
    peso = document.getElementById("weight").value;
    bmi = peso / ((altura / 100) ** 2);

    if(altura != "" && peso != "") {
        if (bmi >= 30  && bmi <= 60) {
            category = "Tienes obesidad";
        }
        else if (bmi >= 25  && bmi < 30) {
            category = "Tienes sobrepeso";
        }
        else if (bmi >= 18.5  && bmi <= 24) {
            category = "Tienes peso normal";
        }
        else if (bmi >= 10  && bmi < 18.5) {
            category = "Tienes bajo peso";
        }
        else {
            category = "Poner datos reales";
        }
    } else {
        category = "Falta llenar una o las dos casillas";
    }
    document.getElementById("bmiResult").innerText = bmi.toFixed(2);
    document.getElementById("bmiCategory").innerText = category;
}

function limpiar() {
    document.getElementById("height").value = ""; 
    document.getElementById("weight").value = ""; 
    document.getElementById("bmiResult").innerText = "";
    document.getElementById("bmiCategory").innerText = "";
}