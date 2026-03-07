let std = {
    name:'sk',
    age:20

}
function abc(){
    console.log(this)

}
abc.call(std);


CALLBACK

function abcd(fun){
    
    fun(function(fun2){
        fun2(function(fun4){
             fun4(function(){
                 console.log("hey")

             })

        })
        
    })

}
abcd(function(fun1){
    fun1(function(fun3){
         fun3(function(fun5){
            fun5()
             

         })
    })
})


function friendsDetails(name,callback){
    console.log("fetching details...");
    setTimeout(() =>{
        callback({
            name:name,
            age:19,
            contact:76544
        });

    },2000);


}

friendsDetails("vishu", function(details){
   
console.log(details)  


})
console.log("end of program");




// promises 
const prm =new Promise((resolve,reject)=>{
    resolve()

})
prm.then(function(){
    console.log("resolved")
})
.catch(function(){
    console.log("resolved")
})
