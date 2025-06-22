document.addEventListener('DOMContentLoaded',function(){
const typed=new Typed('.multiple-text',{
    strings:["Frontend Developer","Student","Engineer"],
    typeSpeed:150,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
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
