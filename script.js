const h1 = document.querySelector ("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", sumarInputsValues); //PREGUNTA DE EXAMEN POR QUE EL EVENTO AQUI NO SE LLAMA CON PARENTESIS Y EN HTML SII

 function sumarInputsValues(event){
    const sumaInputs =input1.value + " " + input2.value;
    pResult.innerText ="Resultado: " + sumaInputs;
    console.log({event});
    event.preventDefault();
}


/*function btnOnClick2(){
    console.log(parseInt(input1.value) + parseInt(input2.value));
    const res = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "El resultado es : " + res;
}* FUNCION DE EJERCICIO DE SUMA DE EVENTOS */

