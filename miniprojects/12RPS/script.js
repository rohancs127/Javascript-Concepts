
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

let randNo, myChoice, cChoice, result;
let moveIcon, cChoiceIcon;
function playGame(randNo){

cChoice=checkMove(randNo);

if(myChoice==='Rock'){
    moveIcon='rock-emoji.png'
    if(cChoice==='Rock'){
        result = 'Its a Tie.';

    }
    else if (cChoice==='Paper'){
        result='You Lose.';
    }
    else if(cChoice==='Scissors'){
        result = 'You Win.';
    }
}

else if(myChoice==='Paper'){
    moveIcon='paper-emoji.png';

    if(cChoice==='Paper'){
        result = 'Its a Tie.';
    }
    else if (cChoice==='Scissors'){
        result='You Lose.';
    }
    else if(cChoice==='Rock'){
        result = 'You Win.';
    }
}

else if(myChoice==='Scissors'){
    moveIcon='scissors-emoji.png';

    if(cChoice==='Scissors'){
        result = 'Its a Tie.';
    }
    else if (cChoice==='Rock'){
        result='You Lose.';
    }
    else if(cChoice==='Paper'){
        result = 'You Win.';
    }
}

calculateScore(result);
updateResult();
updateChoiceElement();
}



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
let autoplayButtonElement = document.querySelector('.autoplay')
let yesButtonElement = document.querySelector('.yes-button');
let noButtonElement = document.querySelector('.no-button');


if(themeButtonText.innerText === 'Dark'){ 
    themeButtonText.innerText= 'Light';
themeButtonText.classList.add('reset-button-light-theme');
themeButtonText.classList.add('autoplay-light-theme');
themeButtonText.classList.add('yes-light-theme');
themeButtonText.classList.add('no-light-theme');

document.body.classList.add('light-theme');
rockButtonElement.classList.add('button-light-theme')
paperButtonElement.classList.add('button-light-theme')
scissorsButtonElement.classList.add('button-light-theme')
resetButtonElement.classList.add('reset-button-light-theme');
autoplayButtonElement.classList.add('autoplay-light-theme');
yesButtonElement.classList.add('yes-light-theme');
noButtonElement.classList.add('no-light-theme');
}
else{
    themeButtonText.innerText='Dark';
themeButtonText.classList.remove('reset-button-light-theme');
themeButtonText.classList.remove('autoplay-light-theme');
themeButtonText.classList.remove('yes-light-theme');
themeButtonText.classList.remove('no-light-theme');

    document.body.classList.remove('light-theme');
rockButtonElement.classList.remove('button-light-theme')
paperButtonElement.classList.remove('button-light-theme')
scissorsButtonElement.classList.remove('button-light-theme')
resetButtonElement.classList.remove('reset-button-light-theme');
autoplayButtonElement.classList.remove('autoplay-light-theme');
yesButtonElement.classList.remove('yes-light-theme');
noButtonElement.classList.remove('no-light-theme');


}
}


let isAutoplay = false;
let intervalID ;

function autoPlay(){
    if (!isAutoplay){
    intervalID = setInterval(() => {
        let random = Math.random();
        randNo=Math.random();
        myChoice = checkMove(random);
        playGame(randNo);
    }, 1000);
    isAutoplay=true;
    document.querySelector('.autoplay').innerText='Stop';
  }
  else{
    clearInterval(intervalID);
    isAutoplay=false;
    document.querySelector('.autoplay').innerText='AutoPlay';

  }
}


document.querySelector('.rock').addEventListener('click', ()=>{
            myChoice = 'Rock';
            randNo = Math.random();
            playGame(randNo);
});



document.querySelector('.paper').addEventListener('click', ()=>{
    myChoice='Paper';
    randNo = Math.random();
    playGame(randNo);
});


document.querySelector('.scissors').addEventListener('click', ()=>{
            myChoice = 'Scissors'
            randNo = Math.random();
            playGame(randNo);
});


document.querySelector('.reset-button').addEventListener('click', ()=>{
            askConfirmation();
});

document.querySelector('.autoplay').addEventListener('click', ()=>{
    autoPlay();
});

document.querySelector('.theme-button').addEventListener('click', ()=>{
    changeTheme();
});

document.body.addEventListener('keydown', (event)=>{
    if (event.key === 'r'){
        myChoice = 'Rock';
        randNo = Math.random();
        playGame(randNo);
    }
    else if(event.key==='p'){
        myChoice='Paper';
        randNo = Math.random();
        playGame(randNo);
    }
    else if(event.key==='s'){
        myChoice = 'Scissors'
        randNo = Math.random();
        playGame(randNo);
    }
    else if(event.key === 'a'){
        autoPlay();
    }
    else if (event.key==='Backspace'){
        askConfirmation();
    }
});

const askConfirmation = ()=>{
    document.querySelector('.confirm').innerHTML=`<p>Are you sure you want to reset the score <button class="yes-button">Yes</button> <button class="no-button">No</button></p>`

    document.querySelector('.yes-button').addEventListener('click', ()=>{
        score.wins=0;
        score.lose = 0;
        score.tie =0;
        localStorage.removeItem('score');
        updateScoreElement();

        document.querySelector('.confirm').innerHTML='';
    });

    document.querySelector('.no-button').addEventListener('click', ()=>{
        document.querySelector('.confirm').innerHTML='';
    })
}