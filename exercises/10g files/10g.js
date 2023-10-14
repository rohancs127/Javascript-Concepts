function pressed(classElement){
    let clickedButtonElement = document.querySelector(classElement);
    let gamingButtonElement = document.querySelector('.gaming-button');
    let musicButtonElement = document.querySelector('.music-button');
    let techButtonElement = document.querySelector('.tech-button');

    if(!clickedButtonElement.classList.contains('is-toggled')){
        clickedButtonElement.classList.add('is-toggled');
        if(clickedButtonElement.innerText===gamingButtonElement.innerText){
            if(musicButtonElement.classList.contains('is-toggled'))
                musicButtonElement.classList.remove('is-toggled');
            if(techButtonElement.classList.contains('is-toggled'))
                techButtonElement.classList.remove('is-toggled');
        }

        else if(clickedButtonElement.innerText===musicButtonElement.innerText){
            if(gamingButtonElement.classList.contains('is-toggled'))
                gamingButtonElement.classList.remove('is-toggled');
            if(techButtonElement.classList.contains('is-toggled'))
                techButtonElement.classList.remove('is-toggled');
        }

        else if(clickedButtonElement.innerText===techButtonElement.innerText){
            if(gamingButtonElement.classList.contains('is-toggled'))
                gamingButtonElement.classList.remove('is-toggled');
            if(musicButtonElement.classList.contains('is-toggled'))
                musicButtonElement.classList.remove('is-toggled');
        }
    }

    else{
        clickedButtonElement.classList.remove('is-toggled')
    }
}