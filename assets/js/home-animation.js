
window.addEventListener('scroll', function(){
    let animation = document.querySelector('[data-fn="animated-hero"]');
    let positionObj1 = animation.getBoundingClientRect().top;
    console.log(positionObj1);
    let sizeWindow = window.innerHeight/5;

    if (positionObj1 < sizeWindow) {
        animation.style.animation ='mover 3s ease-in'
    }
})

