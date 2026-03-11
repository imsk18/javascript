// async and await
async function getData(){
    try{
        let row = await fetch('https://randomuser.me/api/');
        let data = await row.json();
        console.log(data)
        throw("oops!")
    }
    catch(err){
        console.log(err.message)
    }
}
getData()



// day-63
// wether dasboard (openwether api 2.5)


//  async function getWether(city){
//     let apikey = '915e1f9e60bf13f74e055e1148d3b349'

    // fetch( `https://api.openweathermap.org/data/2.5/wether?q=${city}&appid=${apikey}`)
    // .then((row)=> row.json())
    // .then((result)=>{
    //     console.log(result)
    // })
   
async function getWeather(city) {
     let apikey = '915e1f9e60bf13f74e055e1148d3b349'

  try {
    let row = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    );

    let data = await row.json();
  
    console.log(data.name+":",data.main.temp+"°C");

    if(data.main.temp >10){
        console.log("too hot")
    }else{
        console.log("too cold")
    }
      
  } catch (error) {
   throw new Error ("something went wrong")
  }
}

getWeather("lehs");




