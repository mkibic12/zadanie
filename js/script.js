var currentString = ''; //value shown on screen
var last = 0;           //last clicked value
var next = false;       //check if expression was calculated was clicked
var expression = '';    //math operation
var owned = false;      //check if math operator was clicked
var wordCount = 0;      //word count of expression
const div = document.innerHTML = document.querySelector('.screen'); //screen
div.innerHTML = 0;
function change(val){
  let str = String(val);
  if(expression.length === 0 && isNaN(val)){
    //prevent from starting math operator
  }
  else if(isNaN(val) && isNaN(last)){
    last = val;
    expression = expression.slice(0, -1) + last; //replace last clicked math operator with new one
    console.log(expression);
  }
  if(currentString == '0' && val == 0){
    //prevent from starting with 0
  }
  //check if math operator was clicked
 else if(isNaN(val) && val != '.'){
   if(owned === true && expression.toString().indexOf('+') > -1 || expression.toString().indexOf('-') > -1 || expression.toString().indexOf('*') > -1 || expression.toString().indexOf('/') > -1){
       let result = eval(expression);
        div.innerHTML = result;
        expression = result;
        currentString = '';
        expression += val;
          next = true;
          owned = false;
        if(next === false && owned === true){ //calculate by clicking any of math operators except "=" to continue expression
          let result = eval(expression);
          div.innerHTML = result;
          expression = result;
          currentString = '';
          expression += val;
          next = true;
          owned = false;
        }
   }
   
   else{
   currentString += val;
   next = false;
    last = val;
    expression += str;
       currentString = '';
   }
 }
 
  else if(currentString.toString().indexOf('.') > -1 && val ==='.'){
    //prevent from using multiple "."   
  }
  else{
    next = false;
    last = val;
    console.log(last);
    expression += str;
    currentString += str;
    div.innerHTML = currentString;
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', function(){  //C
  expression = '';
  currentString = '';
  next = false;
  owned = false;
  div.innerHTML = 0;
});
document.getElementsByTagName('button')[1].addEventListener('click', function(){  //CE
  if(wordCount > 0){
   let dismiss = expression.substring('', wordCount); //cut expression to wordCount position
   expression = dismiss;
   currentString = '';
   console.log(dismiss);
   dismiss = '';
   wordCount = 0;
  }
});
document.getElementsByTagName('button')[2].addEventListener('click', function(){
  change(1);
});
document.getElementsByTagName('button')[3].addEventListener('click', function(){
  change(2);
});
document.getElementsByTagName('button')[4].addEventListener('click', function(){
  change(3);
});
document.getElementsByTagName('button')[6].addEventListener('click', function(){
  change(4);
});
document.getElementsByTagName('button')[7].addEventListener('click', function(){
  change(5);
});
document.getElementsByTagName('button')[8].addEventListener('click', function(){
  change(6);
});
document.getElementsByTagName('button')[10].addEventListener('click', function(){
  change(7);
});
document.getElementsByTagName('button')[11].addEventListener('click', function(){
  change(8);
});
document.getElementsByTagName('button')[12].addEventListener('click', function(){
  change(9);
});

document.getElementsByTagName('button')[15].addEventListener('click', function(){
  change(0);
});

document.getElementsByTagName('button')[14].addEventListener('click', function(){
  change('.');
});
document.getElementsByTagName('button')[17].addEventListener('click', function(){
  change('+');
  wordCount = expression.length; //save expression length
  owned = true;
});

document.getElementsByTagName('button')[13].addEventListener('click', function(){
  change('-');
  wordCount = expression.length;
  owned = true;
});

document.getElementsByTagName('button')[5].addEventListener('click', function(){
  change('*');
  wordCount = expression.length;
  owned = true;
});

document.getElementsByTagName('button')[9].addEventListener('click', function(){
  change('/');
  wordCount = expression.length;
  owned = true;
});
document.getElementsByTagName('button')[16].addEventListener('click', function(){ //calculate by clicking "="
  let result = eval(expression); // combine string, and calculate expression
  div.innerHTML = result;
  expression = '';
  currentString = '';
  change(result);
  next = true;
  owned = false;
});
