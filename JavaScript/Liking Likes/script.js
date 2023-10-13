const btns=document.querySelectorAll('button');
btns.forEach(btn=>{
    btn.addEventListener('click',handleBtn)
});

function handleBtn(e){
    let nbr=e.target.previousElementSibling
    nbr.innerHTML=getNumber(nbr.innerHTML)+1+" like(s)"
}
function getNumber(x){
    let nb="";
    for(let i=0;i<x.length;i++){
        if(x[i]<="9" && x[i]>="0"){
            nb+=x[i]
        }else{
            break
        }
    }
    return Number(nb);
}