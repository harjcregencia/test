//////////////////////////////////////////////////////////////////////
//Assignment 1 - Unit Converter

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

//adding listener

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    // when we change the input and output type value, we need to update the inputTypeValue and resultTypeValue

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //no compare input and resultType value and add formula

    if(inputTypeValue === "celsius" && resultTypeValue === "farenheit"){
        resultType.valuee = (number(inputType.value)) * 1.8 + 32;
        // document.getElementById('result') = resultType.value;
    }
}
