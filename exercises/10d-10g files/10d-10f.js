function pressed(classElement){
    let buttonElement = document.querySelector(classElement);
    if(!(buttonElement.classList.contains('is-toggled'))){
        buttonElement.classList.add('is-toggled');
    }
    else{
        buttonElement.classList.remove('is-toggled');
    }
}