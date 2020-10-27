let rows = document.getElementsByClassName("number-group");
let operators = document.getElementsByClassName("operator-group");
let stack = '';
let holder1 = '';
let holder2 = '';
let operatorSymbol = '';

for(i=0;i<rows.length;i++){
    rows[i].addEventListener('click', numberInput, true);
    }
for(i=0;i<operators.length;i++){
    operators[i].addEventListener('click', operatorInput, true);
    }

function reset(){
    document.getElementById("display").innerHTML = '';
    stack = '';
    holder1 = '';
    holder2 = '';
    operatorSymbol = '';
}

function numberInput(e){
    document.getElementById("display").innerHTML += e.target.value;
    stack += e.target.value;
};

function operatorInput(e){
    document.getElementById("display").innerHTML = '';
    operatorSymbol = e.target.value;
    holder1 = stack;
    stack = '';
};

function equals(){
    holder2 = stack;
    stack = document.getElementById("display").innerHTML = evalStack();     
};

function evalStack(){
    switch(operatorSymbol) {
        case '+':
          return parseInt(holder1)+parseInt(holder2)
          break;
        case '-':
          return parseInt(holder1)-parseInt(holder2)
          break;
        case 'x':
          return parseInt(holder1)*parseInt(holder2)
          break;
        case '%':
          return parseInt(holder1)/parseInt(holder2)
          break;
}}




