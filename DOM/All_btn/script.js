// let AllBtn = document.querySelectorAll('button')
// AllBtn.forEach((elem)=>{
//     // console.log(elem.innerHTML)
//     elem.addEventListener('click',()=>{
//         // console.log("helo")
//         if(elem.innerHTML == 'cancel'){
//             elem.innerHTML = 'Add Friend'
//         }else{
//             elem.innerHTML = 'cancel'

//         }
//     })
// })

let removeAll= document.querySelectorAll('#remove')
let AllAdd = document.querySelectorAll('#add')
// let card = document.querySelectorAll('.card')
AllAdd.forEach((elem)=>{
elem.addEventListener('click',()=>{
    if(elem.innerHTML=='Add Friend'){
        elem.innerHTML = 'cancel'
    }else{
        elem.innerHTML ='Add Friend'
    }
})
})
removeAll.forEach((elem)=>{
    elem.addEventListener('click',function(){
        let card =this.closest('.card');
        card.remove();
        })
        
    })
    


