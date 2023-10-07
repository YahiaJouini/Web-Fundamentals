const edit=document.querySelector('.edit-profile');
const Allicons=document.querySelectorAll('.icons');
const requests=document.querySelector('.requests-nbr');
const connections=document.querySelector('.connections');

edit.addEventListener('click',()=>{
    const name=document.querySelector('.name');
    name.innerHTML="Julia Doe";
});

Allicons.forEach(icons=>{
    Array.from(icons.children).forEach(icon =>{
        icon.addEventListener('click',handleIcon);
    });
});

function handleIcon(e){
    if(e.target.classList.contains('accept')){
        let nbr=connections.innerHTML;
        connections.innerHTML=(Number(nbr.substring(0,nbr.length-1))+1)+"+";
    }
    let nbr=requests.innerHTML;
    requests.innerHTML=Number(nbr)-1;
    e.target.parentElement.parentElement.remove();
}