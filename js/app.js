var input = document.getElementsByClassName('form-control')[0];

var button = document.getElementsByClassName('btn')[0];

var output = document.getElementsByClassName('output')[0];

function tip20(number){
  var tip = (number/100)*20;
  return tip;
}

button.addEventListener('click', function(){
  output.innerHTML = 'You should tip $' + tip20(input.value).toFixed(2);
});
