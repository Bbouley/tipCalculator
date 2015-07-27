var input = document.getElementsByClassName('form-control')[0];

var button = document.getElementsByClassName('btn')[0];

var output = document.getElementsByClassName('output')[0];

var option = document.getElementsByClassName('select')[0];

function tip20(number){
  var tip = (number/100)*20;
  return tip;
}

function tip15(number){
  var tip = (number/100)*15;
  return tip;
}

function tip10(number){
  var tip = (number/100)*10;
  return tip;
}



button.addEventListener('click', function(){
  if (option[0].selected === true){
  output.innerHTML = 'You should tip $' + tip10(input.value).toFixed(2);} else if(option[1].selected === true){
  output.innerHTML = 'You should tip $' + tip15(input.value).toFixed(2);} else if(option[2].selected === true){
  output.innerHTML = 'You should tip $' + tip20(input.value).toFixed(2)
  }
  }
);
