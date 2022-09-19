//liaison   front w  back 

import axios from "axios" // bib 


//const TOKEN =JSON.parse(localStorage.getItem("token")) //29-07-2022
//console.log("this is my token",TOKEN)//29-07-2022


export default axios.create({

    baseURL :"http://localhost:5000",
   //headers:{authorization:`${TOKEN}`} //29-07-2022

})
