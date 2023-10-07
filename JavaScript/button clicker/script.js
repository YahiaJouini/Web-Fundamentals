const login=document.querySelector('.login');
const definition=document.querySelector('.defin');

const likes=document.querySelectorAll('.likes');
likes.forEach(like =>{
    like.addEventListener('click',()=>{
        alert('ninja was liked');
        like.textContent=increase(like.textContent);
    });
})

login.addEventListener('click',()=>{
    if(login.textContent.toLowerCase()=='login'){
        login.textContent='Logout';
    }else{
        login.textContent="Login";
    }
});

definition.addEventListener('click',(e)=>{
    e.target.remove();
});


function increase(x){
    nb="";
    for(i=0;i<x.length;i++){
        if(x[i]>="0"&& x[i]<="9"){
            nb+=x[i];
        }else{
            break;
        }
    }
    if(nb!=""){
        return Number(nb)+1 +" Likes";
    }else{
        return x;
    }
}