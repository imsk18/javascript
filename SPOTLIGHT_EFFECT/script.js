addEventListener('mousemove',(e)=>{
document.body.style.setProperty("--x",e.clientX+'px')
document.body.style.setProperty("--y",e.clientY+'px')
})



const p = document.querySelector('p')
 const text = p.innerText 

const characters = "ABCDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0

function randomText(){
    const str =text.split("").map((char,index) => {
        if(index<iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*53)]

    }).join("")
    p.innerText = str
    iteration += 0.25
   
}
setInterval(randomText,50)




