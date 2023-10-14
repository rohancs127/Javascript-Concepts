
calculation = JSON.parse(localStorage.getItem('calculation')) || '';
document.querySelector('.display-calculation').innerHTML=  calculation;

function updateCalculation(char=''){
calculation+= char;
localStorage.setItem('calculation',JSON.stringify(calculation));
document.querySelector('.display-calculation').innerHTML=  calculation;

}