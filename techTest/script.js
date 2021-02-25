document.addEventListener('DOMContentLoaded',function(){
    menuActive();
});

function menuActive(){
    const menuButton = document.querySelector(".menu-icon");
    const navigation = document.querySelector(".navigation__wrapper");
    menuButton.addEventListener('click',() => {
        navigation.classList.toggle('active');

    });
}
