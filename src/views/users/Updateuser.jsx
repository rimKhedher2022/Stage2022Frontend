import React, { useEffect, useState } from 'react'
import UserService from '../../services/UserService'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'

const Updateuser = () => {


const [data,setData]=useState({})

// el id nejibou 

const {id} = useParams() // te3adiha lil fonction useeffect



const handleChange=(e)=>
{
    setData({
        ...data,
        [e.target.name]:e.target.value
    })
}




const onSubmitHandler = (e)=>

{

    e.preventDefault()

    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            UserService.update(id,data).then(res=>
                {
               console.log("responsive ==>",res)
               setData(res.data.data)
               window.location="/getallusers"
        
                }
                ).catch(err=>
                    {
                        console.log(err)
                    })
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
   


}




useEffect(()=>{
 
    UserService.getbyid(id).then(res=>{
        console.log(res)
        setData(res.data.data)

    }).catch(err=>{
        console.log(err)
    })
},[])

// getByid











  return (
    <div>
        


        <div class="page-content-wrap">
                
                <div class="row">
                    <div class="col-md-12">
                        
                        <form class="form-horizontal" onSubmit={onSubmitHandler}>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title"><strong>Update</strong> user</h3>
                                <ul class="panel-controls">
                                    <li><a href="/getallusers" class="panel-remove"><span class="fa fa-times"></span></a></li>
                                </ul>
                            </div>
                            <div class="panel-body">
                               
                            </div>
                            <div class="panel-body">                                                                        
                                
                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">firstname</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control"  name="firstname" value={data.firstname} onChange={handleChange}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">lastname</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control" name="lastname" value={data.lastname} onChange={handleChange}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label class="col-md-3 col-xs-12 control-label">email</label>
                                    <div class="col-md-6 col-xs-12">                                            
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="fa fa-pencil"></span></span>
                                            <input type="text" class="form-control"  name="email" value={data.email} onChange={handleChange}/>
                                        </div>                                            
                                        
                                    </div>
                                </div>
                                
                              
                                
                              
                                
                             
                                
                            
                                
                              
                                
                            

                            </div>
                            <div class="panel-footer">
                                <button class="btn btn-default">Clear Form</button>                                    
                                <button class="btn btn-primary pull-right" type="submit">Modifier</button>
                            </div>
                        </div>
                        </form>
                        
                    </div>
                </div>                    
                
            </div>
    </div>
  )
}

export default Updateuser