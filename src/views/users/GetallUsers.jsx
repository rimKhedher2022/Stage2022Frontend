import React, { useEffect } from 'react'
import  { useState } from 'react'
import UserService from '../../services/UserService'
import {Link} from "react-router-dom"
import axios from 'axios'
import Swal from 'sweetalert2'

const GetallUsers = () => {

 

const [users,setUsers]= useState([])
// bech tejib 7aja mil base , useEffects

const getallusers =()=>{

   UserService.getall().then(res=>
    
    {
        console.log(res)
        setUsers(res.data.data)
    }).catch(err=>
        {
            console.log(err)
        })
    

}

        useEffect(()=>
        {
            getallusers()
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


            UserService.remove(id).then(res=>
        
                {
                    console.log(res)
                    getallusers()
                }
                ).catch(err=>{
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
    axios.get("http://localhost:5000/clients/getbyname",{params:{
        firstname:value

    }}).then(res=>{
        console.log(res)
        setUsers(res.data.data)
    })
}






  return (
    <div>

<li className="xn-search">
        <form role="form">
          <input type="text" name="search" placeholder="Search..." onChange={(e)=> search(e.target.value)} />
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
                                                    <th>firstname</th>
                                                    <th width="100">lastname</th>
                                                    <th width="100">adressL</th>
                                                    <th width="100">actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>  

                                                {/* table dynamic  , bech yera9amhom                                        */}
                                               { users.map((item,index)=>{
                                                return (
                                                    <tr id="trow_1">
                                                    <td class="text-center">{index}</td>
                                                    <td>{item.firstname}</td>
                                                    <td>{item.lastname}</td>
                                                    <td>{item.adressL}</td>
                                                    
                                                    <td>
                                                        <Link to={`/update/${item._id}`}>
                                                        <button class="btn btn-default btn-rounded btn-sm"><span class="fa fa-pencil"></span></button>
                                                        </Link>
                                                        <button class="btn btn-danger btn-rounded btn-sm" onClick={()=>onDelete(item._id)}><span class="fa fa-times"></span></button>
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

export default GetallUsers