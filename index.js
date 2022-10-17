var input = document.getElementById('input').value*1;
var result = document.getElementById('result').value*1;
var inputType = document.getElementById('inputType').value*1;
var resultType = document.getElementById('resultType').value*1;
var inputTypeValue, resultTypeValue;

//adding listener

input.addEventListener("keyup, myResult");
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
        resultType.value = (Number(inputType.value) * 1.8) + 32;
        document.getElementById('result') = resultType.value;
    }
}
