// Ejercicio 1
function convertirDiasAHoras(dias){
    return dias*24
}
function calcular(){
    //recupera los datos (dias)
    let dias = document.getElementById("idDias").value;

    //calcular cantidad de horas
    let horas = convertirDiasAHoras(dias);

    //mostrar resultados(cantidad de horas)
    document.getElementById("idResultadoUno").innerText = `${dias} días equivalen a ${horas} horas.`;
}

// Ejercicio 2
function esCero(numero){
    return Number(numero) === 0
}

function calcularCero(){
    //recupera los datos (numero)
    let num = document.getElementById("idNum").value;

    //calcular si el numero es cero
    let numero = esCero(num);

    // convertir el booleano a texto en español
    const textoEnEspanol = numero ? 'Verdadero' : "Falso"; //el operador ? funciona como un if
    //mostrar resultados
    document.getElementById("idResultadoDos").innerText =  `${textoEnEspanol}.`;
}

// Ejercicio 3
function TextosIguales(texto1,texto2){
    return texto1 === texto2
}

function calcularTexto(){
    //Recupera los datos (textoUno, TextoDos)
    let texto1 = document.getElementById("idFraseUno").value;
    let texto2 = document.getElementById("idFraseDos").value;

    //calcular si texto1 es igual a texto2
    let resultado = TextosIguales(texto1,texto2);

    // convertir el booleano a texto en español
    const textoEnEspanol = resultado ? 'Son iguales' : "No son iguales";

    //mostrar resultado 
    document.getElementById("idResultadoTres").innerText = `${textoEnEspanol}.`;
}

// Ejercicio 4
function calcularAreaTriangulo(base,altura){
    const area = (base * altura)/2;
    return area
}

function calcularArea(){
    //Recuperar los datos (base,altura)
    let base = Number(document.getElementById("idBase").value);
    let altura = Number(document.getElementById("idAltura").value);

    //Calcular el area del triangulo
    let resultado = calcularAreaTriangulo(base,altura)

    //Mostrar resultado
    document.getElementById("idResultadoCuatro").innerText = `El area es ${resultado}`
}

// Ejercicio 5
function calcularMonto(propina,monto){
    let montoFinal;

    if (propina === "bueno"){
        montoFinal = monto + (monto * 0.15);
    } else if (propina === "regular"){
        montoFinal = monto + (monto * 0.10);
    } else if (propina === "malo"){
        montoFinal = monto + (monto * 0.05);
    }
    
    return montoFinal;
}

function calcularMontoFinal(){
    //Recuperar los datos del HTML (calidad,monto)
    let monto = Number(document.getElementById("idMonto").value);
    let calidad = document.getElementById("idCalidad").value;

    //Calcular el monto final
    let resultado = calcularMonto(calidad,monto);
    let propinaTotal = resultado - monto;

    document.getElementById("idResultadoCinco").innerText =  `Propina: ${propinaTotal}. \n Total a pagar: ${resultado}.`;
    
}