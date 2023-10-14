
function subscribe(){
    const element=  document.querySelector('.subscribe-button');

if(element.innerText === 'Subscribe'){
    element.innerText = 'Subscribed';
    element.classList.add('is-subscribed');
}
else{
    element.innerHTML = 'Subscribe';
    element.classList.replace('is-subscribed','subscribe-button');
}
}

function calculateCost(){
    const cost = Number(document.querySelector('.cost-value').value);
    let ship = cost;
    if(cost<0){
        document.querySelector('.display-cost').classList.add('display-error');
        document.querySelector('.display-cost').innerHTML='Error: Cost cannot be less than 0$';
    }
    else{
    document.querySelector('.display-cost').classList.remove('display-error');
    ship= (cost<40)? 10 : 0;
    document.querySelector('.display-cost').innerHTML = `$${cost+ship}`;
    }

}


function calculateByEnter(){
    if (event.key === 'Enter')
    calculateCost();
}
