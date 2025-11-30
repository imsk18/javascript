

let main = document.querySelector('main')
let btn = document.querySelector('button')

main.addEventListener("click",()=>{
  
    let div =document.createElement("div")

      
    // random position create
    let left = Math.floor(Math.random()*100)
    let top = Math.floor(Math.random()*100)

    // random color create
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    // random height/width create
      let h = Math.floor(Math.random()*50)
      let w = Math.floor(Math.random()*50)
    
    div.style.height=h+'px'
    div.style.width= w+'px'
    div.style.rotate= c1+'deg'
    div.style.backgroundColor= `rgb(${c1},${c2},${c3})`
    div.style.position='absolute'
    div.style.top= top+'%'
    div.style.left= left+'%'
 
    main.appendChild(div)
//   console.log(left)
//   console.log(top)
})