yesbtn = document.querySelector('.yesbtn')
nobtn = document.querySelector('.nobtn')
h1 = document.querySelector('h1')

nobtn.addEventListener('mouseover',mousehover)

function mousehover(){
    const i = Math.floor(Math.random()*1000)+1;
    const j = Math.floor(Math.random()*500)+1;

    nobtn.style.left = i+"px"
    nobtn.style.top = j+"px"
}

yesbtn.addEventListener('click',()=>{
    h1.innerHTML = "Haha, Knew it! Welcome to the DSA struggle bus!"
})