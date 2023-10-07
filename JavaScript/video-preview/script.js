const vid=document.querySelector('video');
vid.addEventListener('mouseenter',()=>{
    vid.play()
    vid.muted=true;
});
vid.addEventListener('mouseleave',()=>{
    vid.pause();
});