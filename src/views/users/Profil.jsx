import React from 'react'
import "./profil.css"

const Profil = () => {
// nejib mil local storage  (user mawjuda fil local storage)


const user = JSON.parse(localStorage.getItem("user"))












  return (
    <div>
<div style={{marginTop:100,marginLeft:350,width:700,height:700}} class="container d-flex justify-content-center">
    <div class="card p-3 py-4">
        <div class="text-center"> 
		<img class="rounded-circle" src={"http://localhost:5000/getImg/"+user.image} width="100" />
            <h3 class="mt-2">{user.firstname} {user.lastname}</h3>
			<span class="mt-1 clearfix"></span>
			
			<div class="row mt-3 mb-3">
			
			  <div class="col-md-4">
				<h5>email</h5>
				<span class="num">{user.email}</span>
			  </div>
			  <div class="col-md-4">
			  <h5>adress</h5>
				<span class="num">{user.adressL}</span>
			  </div>
			  <div class="col-md-4">
			  <h5>Projects</h5>
				<span class="num">10</span>
			  </div>
			
			</div>
			
		
			
			
              
		
			   
        </div>
    </div>
</div>



    </div>
  )
}

export default Profil