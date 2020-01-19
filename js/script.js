const screen = document.querySelector('.screen'); //screen
var last = '';           //last clicked value
var next = false;       //check if expression was calculated was clicked
var expression = '';    //math operation
var owned = false;      //check if math operator was clicked
var wordCount = 0;      //word count of expression
var dot = false;        //check if dot was clicked
var afterOperator = ''; //number after math operator
var lastOperator = '';  //last used opeartor
let after = '';         
var current = '';       //displayed expression on screen
var pow = false;
var sqrt = false;
var value1 = 0;         //value before ^ or √
var value2 = 0;         //value after ^ or √
screen.innerHTML = 0;
function change(val) {
  let str = String(val);
  if(last == 0 && expression.length == 1){
    if(val === '.'){
      expression += val;
      current += val;
      screen.innerHTML = current;
    }
  }
  else if (expression.length === 0 && isNaN(val)) {
    //prevent from starting math operator
    if(val == '(' || val == ')'){
      expression += str;
      wordCount = expression.length;
      current += str;
      screen.innerHTML = current;
      next = false;
      owned = true;
      last = val;  
    }
  }
 else if(isNaN(last) && isNaN(val)){
   if(val == '(' || val == ')'){
    expression += str;
    current += str;
    wordCount = expression.length;
    screen.innerHTML = current;
    next = false;
   }
   else if(last == ')' && isNaN(val)){
    expression += str;
    current += str;
    wordCount = expression.length;
    screen.innerHTML = current;
    next = false;
    owned = true;
    last = val;
    lastOperator = val;
   }
 }
  else if(afterOperator === 0 && val != '.'){
    if(last == '.' || last != 0){
      next = false;
      expression += str;
      current += str;
      wordCount = expression.length;
      screen.innerHTML = current;
      last = val;  
    }
  }
  

  else if (val === '.' && dot == true) {
  }

  else {
    if(expression.length == 0 && typeof(val) == 'number'){
      lastOperator = val;
    }
    next = false;
    expression += str;
    current += str;
    wordCount = expression.length;
    screen.innerHTML = current;
    if(isNaN(last) && last != '.'){
      afterOperator = val;
    }
    else if(isNaN(val) && val != '.'){
      if(val != '^'){
        lastOperator = val;
      }
    }
    last = val;
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', function () {  //C
  expression = '';
  current = '';
  next = false;
  owned = false;
  dot = false;
  screen.innerHTML = 0;
  afterOperator = '';
  last = '';
});
document.getElementsByTagName('button')[1].addEventListener('click', function () {  //CE
  if (wordCount > 0 && !isNaN(last)) {
    let dismiss = expression.substring('', wordCount -1 ); //cut expression to wordCount position
    expression = dismiss;
    wordCount = expression.length;
    dismiss = '';
    screen.innerHTML = expression;

  }
});
document.getElementsByTagName('button')[2].addEventListener('click', function () {
  
  change(1);
  owned = false;
  
});
document.getElementsByTagName('button')[3].addEventListener('click', function () {
  
  change(2);
  owned = false;
  
});
document.getElementsByTagName('button')[4].addEventListener('click', function () {
  
  change(3);
  owned = false;
  
});
document.getElementsByTagName('button')[6].addEventListener('click', function () {
  
  change(4);
  owned = false;
  
});
document.getElementsByTagName('button')[7].addEventListener('click', function () {
  
  change(5);
  owned = false;
  
});
document.getElementsByTagName('button')[8].addEventListener('click', function () {
  
  change(6);
  owned = false;
  
});
document.getElementsByTagName('button')[10].addEventListener('click', function () {
  change(7);
  owned = false;
});
document.getElementsByTagName('button')[11].addEventListener('click', function () {

  change(8);
  owned = false;
  
});
document.getElementsByTagName('button')[12].addEventListener('click', function () {
  
  change(9);
  owned = false;
  
});

document.getElementsByTagName('button')[15].addEventListener('click', function () {
  if(isNaN(last) && last != '.'){
    change(0);
    afterOperator = 0;
  }
  change(0);
  owned = false;
  
});

document.getElementsByTagName('button')[14].addEventListener('click', function () {
  if (isNaN(last) || dot === true) {
  }

  else if (expression.length == 0) {
    //prevent from starting from 0
    dot = false;
  }
  else {
    change('.');
    dot = true;
    last = '.';
  }
});
document.getElementsByTagName('button')[17].addEventListener('click', function () {
  if(pow == true){
    power2();
    let sum = value1.length + value2.length; //total length of values next to ^  √
    expression = expression.substring('', wordCount -sum); //cut expression to wordCount position
    expression += 'Math.pow('+value1+','+ value2+')';
    pow = false; 
  }
  if(sqrt == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum); //cut expression to wordCount position
    expression += 'Math.pow('+ value2+','+ 1/value1 +')'; //n = value2, x = 1/value1
     sqrt = false; 
   }
  owned = true;
    dot = false;
  change('+');
});

document.getElementsByTagName('button')[13].addEventListener('click', function () {
  if(pow == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum ); //cut expression to wordCount position
    expression += 'Math.pow('+value1+','+ value2+')';
    pow = false; 
  }
  if(sqrt == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum); //cut expression to wordCount position
    expression += 'Math.pow('+ value2+','+ 1/value1 +')';
     sqrt = false; 
   }
  change('-');
  owned = true;
  dot = false;
});

document.getElementsByTagName('button')[5].addEventListener('click', function () {
  if(pow == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum ); //cut expression to wordCount position
    expression += 'Math.pow('+value1+','+ value2+')';
    pow = false; 
  }
  if(sqrt == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum); //cut expression to wordCount position
    expression += 'Math.pow('+ value2+','+ 1/value1 +')';
     sqrt = false; 
   }
  change('*');
  owned = true;
  dot = false;
});

document.getElementsByTagName('button')[9].addEventListener('click', function () {
  if(pow == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum ); //cut expression to wordCount position
    expression += 'Math.pow('+value1+','+ value2+')';
    pow = false; 
  }
  if(sqrt == true){
    power2();
    let sum = value1.length + value2.length;
    expression = expression.substring('', wordCount -sum); //cut expression to wordCount position
    expression += 'Math.pow('+ value2+','+ 1/value1 +')';
     sqrt = false; 
   }
  change('/');
  owned = true;
  dot = false;
  
});
document.getElementsByTagName('button')[16].addEventListener('click', function () { //calculate by clicking "="
if(pow == true){
  power2();
  let sum = value1.length + value2.length;
  expression = expression.substring('', wordCount -sum ); //cut expression to wordCount position
  expression += 'Math.pow('+value1+','+ value2+')';
  pow = false; 
}
if(sqrt == true){
  power2();
  let sum = value1.length + value2.length;
  expression = expression.substring('', wordCount -sum); //cut expression to wordCount position
  expression += 'Math.pow('+ value2+','+ 1/value1 +')';
   sqrt = false; 
 }
  let result = eval(expression); // combine string, and calculate expression
  screen.innerHTML = result;
  expression = '';
  current = '';
  last = result;
  next = true;
  owned = false;
  afterOperator = '';
  change(result);
  if (JSON.stringify(result).indexOf('.') > -1) {
    dot = true;
  }
  else {
    dot = false;
  }
});
document.getElementsByTagName('button')[18].addEventListener('click', function () {
  change('(');
});
document.getElementsByTagName('button')[19].addEventListener('click', function () {
  change(')');
});
document.getElementsByTagName('button')[20].addEventListener('click', function () {
  if(expression.length != 0){
  pow = true;
  current += '^';
  screen.innerHTML = current;
  power1();
  }
});
document.getElementsByTagName('button')[21].addEventListener('click', function () {
  if(expression.length != 0){
  sqrt = true;
  current += 'n';
  current += '√';
  screen.innerHTML = current;
  power1();
  }
});
function power1(){  //function that checks entered value before clicking ^ or  √
  var before = expression.lastIndexOf(lastOperator);
if(expression.includes('+') || expression.includes('-') || expression.includes('/') || expression.includes('*')){
  value1 = expression.substring(before+1, wordCount);
  let lastChar = value1.charAt(value1.length-1);
  after = expression.lastIndexOf(lastChar);
}
else{
  value1 = expression.substring('', wordCount);
  let lastChar = value1.charAt(value1.length-1);
  after = expression.lastIndexOf(lastChar);
}
}
function power2(){  //function that checks entered value after clicking ^ or  √
  value2 = expression.substring(after+1, wordCount);
}
