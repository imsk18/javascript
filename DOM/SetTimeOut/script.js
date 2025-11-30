let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');
let grow = 0;

btn.addEventListener("click",() =>{

    btn.style.pointerEvents = 'none';
    btn.style.opacity = 0.5;

    let num = 50+Math.floor(Math.random()*50)

   
    
    let c = setInterval(()=>{
    grow++
    
     h2.innerHTML = grow +'%'
     inner.style.width = grow+'%'

    },num)
    

    setTimeout(()=>{
        clearInterval(c)
        btn.innerHTML = 'downloaded';
        console.log('downloaded in ',num/10 ,'second')
     
    },num*100)
    
})
   



