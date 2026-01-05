let operation = localStorage.getItem("operation");

if (operation === null) {
  operation = 0;

  }
 else {
  operation = (parseInt(operation) + 1) % 3;
}


localStorage.setItem("operation", operation);

const operationText = document.getElementById("operation");

if(operation == 0){
  operationText.innerText="addition";
}
 else if(operation == 1){
  operationText.innerText="Substrction";
}
else{
  operationText.innerText="Multiplication";
}



const symbol=document.getElementById("symbol");

if (operation == 0) {
  symbol.innerText = "+";
} else if (operation == 1) {
  symbol.innerText = "-";
} else {
  symbol.innerText = "*";
}

function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let result;

  if (operation == 0) {
    result = num1 + num2;
  } else if (operation == 1) {
    result = num1 - num2;
  } else {
    result = num1 * num2;
  }
  const userinput=Number(document.getElementById("userinput").value);

if(result === userinput){
  result="true";
}
else{
  result="false";
}
document.getElementById("result").innerText = "Result: " + result;
}

  

const num3=document.getElementById("num1");
const num4=document.getElementById("num2");
 
function generate(){
  const random1=Math.floor(Math.random()* 100)+1;
  const random2=Math.floor(Math.random()* 100)+1;
  num3.value=random1;
  num4.value =random2;

}
generate();
