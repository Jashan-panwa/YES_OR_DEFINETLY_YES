const wrapper=document.querySelector('.wrapper');
const question=document.querySelector('.question');
const yesbtn=document.querySelector('.yes-btn');
const nobtn=document.querySelector('.no-btn');

const wrapperbox=wrapper.getBoundingClientRect();
const nobtnbox=nobtn.getBoundingClientRect();

const loveIcon = document.querySelector('i');

yesbtn.addEventListener('click',()=>{
    question.innerHTML=':) Because code should speak to humans as well as computers !!!';

    loveIcon.classList.remove('fa-solid', 'fa-circle-question','doubt');
    loveIcon.classList.add('fa-regular', 'fa-face-grin-hearts','love');


    yesbtn.classList.add('yesclicked');
    nobtn.classList.add('yesclicked');

});

nobtn.addEventListener('mouseover',()=>{
    const i =Math.floor(Math.random()*(wrapperbox.width - nobtnbox.width))+1;
    const j =Math.floor(Math.random()*(wrapperbox.height - nobtnbox.height))+1;
    nobtn.style.left=i+'px';
    nobtn.style.top=j+'px';
});
