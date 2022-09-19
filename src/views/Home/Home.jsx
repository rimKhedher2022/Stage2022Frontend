//import React from 'react' // rafce 

import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'


const GetAllProducts = () => {


  const [products,setProducts] = useState([])
  const [errors,setErrors] = useState([]) //29-07-2022

const getallproducts=()=>{


  ProductService.getall().then(res=>
      
      {
          console.log(res)
          setProducts(res.data.data)

      }).catch(err=>
          {
          console.log(err)
          if(errors.response && errors.response.status >= 400) //29-07-2022
          {
              setErrors(err.response.data)
          }
          alert(err.response.data.message)

          }
      )
 
}

useEffect(()=>
{
  getallproducts()
},[])

}

const Home = () => {  
  return (  // 
    <div>

 <div className="page-container">

     <Sidebar/>
     
      <div className="page-content">
 <Header/> 
                          
        
          <Layout/>  
                                      
      </div>            

            
  </div>








    </div>
  )
}

export default Home