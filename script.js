document.addEventListener('DOMContentLoaded',function(){
const typed=new Typed('.multiple-text',{
    strings:["Frontend Developer","Student","Engineer"],
    typeSpeed:150,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const sr=ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

sr.reveal('.homecontent',{origin:'top'});
sr.reveal('.heading',{origin:'top'});
sr.reveal('.home-image',{origin:'bottom'})
sr.reveal('.cardscroll',{origin:'bottom'})
sr.reveal('.proj-container',{origin:'bottom'})
sr.reveal('.form-content',{origin:'bottom'})
sr.reveal('.homecontent h1',{origin:'left'})
sr.reveal('.aboutimg',{origin:'left'})
sr.reveal('.homecontent p',{origin:'right'})
sr.reveal('p',{origin:'bottom'})

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}

const navToggle=document.getElementById('nav-toggler');
const navClose=document.getElementById('nav-close');
const navMenu=document.getElementById('navbarSupportedContent');
const navLinks=document.querySelectorAll('#navbarSupportedContent a')

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show');
    navToggle.style.display = 'none';
    navClose.style.display = 'block';
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show');
    navToggle.style.display = 'block';
    navClose.style.display= 'none';
});

if(window.innerWidth <1100){
navLinks.forEach(link => {
    link.addEventListener('click', () =>{
    navMenu.classList.remove('show');
    navToggle.style.display = 'block';
    navClose.style.display= 'none';
    });
});
}

});
