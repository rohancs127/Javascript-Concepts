
let score=JSON.parse(localStorage.getItem('score')) ||  {
    wins : 0,
    lose : 0,
    tie : 0
};

updateScoreElement();

/*if(!score){
score = {
    wins : 0,
    lose : 0,
    tie : 0
};
}*/

let randNo, cChoice, result;
let moveIcon, cChoiceIcon;
function checkMove(randNo){
if(randNo>=0 && randNo<(1/3)){
    return 'Rock';
}
else if(randNo>=(1/3) && randNo<(2/3)){
    return 'Paper';
}
else if(randNo>=(2/3) && randNo<=1){
    return 'Scissors';
}
}

function calculateScore(result){
if(result==='You Win.')
    score.wins++;
else if(result==='You Lose.')
    score.lose++;
else
    score.tie++;

if(cChoice==='Rock')
    cChoiceIcon='rock-emoji.png';
else if(cChoice==='Paper')
    cChoiceIcon='paper-emoji.png'
else
    cChoiceIcon= 'scissors-emoji.png'

localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
}


function updateResult(){
document.querySelector('.display-result').innerHTML = result;
}

function updateChoiceElement(){
document.querySelector('.display-choice').innerHTML = `You <img class="move-icon" src="/images/${moveIcon}"> <img class="move-icon" src="/images/${cChoiceIcon}">  Computer`;
}

function updateScoreElement(){
document.querySelector('.display-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`;
}



function changeTheme(){
let themeButtonText = document.querySelector('.theme-button');
let bodyElement = document.body;
let rockButtonElement = document.querySelector('.rock');
let paperButtonElement = document.querySelector('.paper');
let scissorsButtonElement = document.querySelector('.scissors');
let resetButtonElement = document.querySelector('.reset-button');


if(themeButtonText.innerText === 'Dark'){ 
    themeButtonText.innerText= 'Light';
themeButtonText.classList.add('reset-button-light-theme');
document.body.classList.add('light-theme');
rockButtonElement.classList.add('button-light-theme')
paperButtonElement.classList.add('button-light-theme')
scissorsButtonElement.classList.add('button-light-theme')
resetButtonElement.classList.add('reset-button-light-theme');
}
else{
    themeButtonText.innerText='Dark';
themeButtonText.classList.remove('reset-button-light-theme');
    document.body.classList.remove('light-theme');
rockButtonElement.classList.remove('button-light-theme')
paperButtonElement.classList.remove('button-light-theme')
scissorsButtonElement.classList.remove('button-light-theme')
resetButtonElement.classList.remove('reset-button-light-theme');

}
}

