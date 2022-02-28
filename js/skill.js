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

// services
const body1 = document.querySelector('.body1');
const body2 = document.querySelector('.body2');
const body3 = document.querySelector('.body3');
const body4 = document.querySelector('.body4');
const body5 = document.querySelector('.body5');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');
const inner3 = document.querySelector('.inner3');
const inner4 = document.querySelector('.inner4');
const inner5 = document.querySelector('.inner5');
body1.addEventListener('click',()=>{
    inner1.classList.toggle('rotate');
})
body2.addEventListener('click',()=>{
    inner2.classList.toggle('rotate');
})
body3.addEventListener('click',()=>{
    inner3.classList.toggle('rotate');
})
body4.addEventListener('click',()=>{
    inner4.classList.toggle('rotate');
})
body5.addEventListener('click',()=>{
    inner5.classList.toggle('rotate');
})
