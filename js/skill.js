const sideNav = document.querySelector(`.side-nav`);
const navopen = document.querySelector(`.fa-bars`);
const navclose = document.querySelector(`.fa-times`);
const sideNavBackground = document.getElementById(`side-nav-cover`);


navopen.addEventListener(`click`, () => {
    sideNav.classList.add(`toggle`);
    sideNavBackground.classList.add(`toggle`);
    document.body.classList.add(`hide-overflow`);
    navopen.style.display='none';
    navclose.style.display='block';
    navclose.style.color='red';
    navclose.classList.add(`rotation`);
});

navclose.addEventListener(`click`, () => {
    sideNav.classList.remove(`toggle`);
    sideNavBackground.classList.remove(`toggle`);
    document.body.classList.remove(`hide-overflow`);
    navclose.style.display='none';
    navopen.style.display='block';
    
});
sideNavBackground.addEventListener(`click`, () => {
    sideNavBackground.classList.remove(`toggle`);
    sideNav.classList.remove(`toggle`);
    document.body.classList.remove(`hide-overflow`);
    navopen.style.display='block';
    navclose.style.display='none';
})

function closeside(){
    sideNavBackground.classList.remove(`toggle`);
    sideNav.classList.remove(`toggle`);
    document.body.classList.remove(`hide-overflow`);
    navopen.style.display='block';
    navclose.style.display='none';
}

const nav =document.querySelector('.bar')
window.addEventListener('scroll', fixnav)

function fixnav(){
    if(window.scrollY>nav.offsetHeight +150)
    {
        nav.classList.add('active')
    }
    else{
        nav.classList.remove('active')
    }
}

// button

