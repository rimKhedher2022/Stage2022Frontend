import React, { useEffect, useState } from 'react'
import ProductService from '../../services/ProductService'
import {Link} from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'

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


  const onDelete=(id)=>

  {




    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            ProductService.remove(id).then(res=>{
                console.log(res)
                getallproducts()
            }).catch(err=>{
                console.log(err)
            })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
    
  }
    
 



  //getByName

const search = value =>{
    axios.get("http://localhost:5000/products/getbyname",{params:{
        refproduct:value

    }}).then(res=>{
        console.log(res)
        setProducts(res.data.data)
    })
}








  return (
    <div>
        


        <li className="xn-search">
        <form role="form">
          <input type="text" name="search" placeholder="Search..." onChange={(e)=>search(e.target.value)} /> 
          
        </form>
</li>   



<div class="row">
                        <div class="col-md-12">
                            <div class="panel panel-default">

                                <div class="panel-heading">
                                    <h3 class="panel-title">Responsive tables</h3>
                                </div>

                                <div class="panel-body panel-body-table">

                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-actions">
                                            <thead>
                                                <tr>
                                                    <th width="50">index</th>
                                                    <th>refproduct</th>
                                                    <th width="100">description</th>
                                                    <th width="100">price</th>
                                                    <th width="100">sub</th>
                                                    <th width="100">image</th>
                                                   
                                                    <th width="100">actions </th> 
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>  

                                                {/* table dynamic  , bech yera9amhom                                        */}
                                               {products.map((item1,index)=>{
                                                return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td>{item1.refproduct}</td>
                                                    <td>{item1.description}</td>
                                                    <td>{item1.price}</td>
                                                    <td>{item1.subcategory?.name}</td>
                                                    <td>
                                                        {<img  src={"http://localhost:5000/getImg/"+item1.image} width="100" />}
                                                    </td>
                                                   
                                                  
                                           
                                                    
                                                    <td>
                                                        <Link to={`/updateProduct/${item1._id}`}>
                                                        <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item1._id)}  ><span class="fa fa-times"></span></button>
                                                        
                                                    </td>
                                                </tr>
                                                )
                                               }
                                                
                                                
                                               )}
                                                
                                               
                                            </tbody>
                                        </table>
                                    </div>                                

                                </div>
                            </div>                                                

                        </div>
</div>




    </div>
  )
}

export default GetAllProducts