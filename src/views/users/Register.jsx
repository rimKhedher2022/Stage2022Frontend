import React, { useState } from 'react'
import UserService from '../../services/UserService'

const Register = () => {
// client 

// setData : methode tebadil el data => les donnes te7othom fil data (data )

// setData : previous state meta3 dta  (...data)
// onChange={handle.} fil input el kol ==> na7ki me3a el input 

// name =====> valeur 
const [image,setImg] = useState("")

const [data,setData]=useState({
  firstname:"",// les valeurs initiales 
  lastname:"",
  email:"",
  password:"",
  adressL:"",
  image:"" // 5idma wa7adeha


})


const handleChange =(e)=>
{
  setData({
 ...data,  // previous state meta3 data
 [e.target.name]:e.target.value

  })
}



// boutton submit 
// onsubmit fil form 
// onclick fil button ( w nezid type="submit")
const onSubmitHandler = (e)=>
{
  e.preventDefault() // mouch fil params

  const formdata = new FormData()

  //

  formdata.append("photo",image)
  formdata.append("firstname",data.firstname)
  formdata.append("lastname",data.lastname)
  formdata.append("email",data.email)
  formdata.append("password",data.password)
  formdata.append("adressL",data.adressL)


  // consommi el backend


  UserService.register(formdata).then(res=>{ // el parent wel childrin 

    console.log(res)

setData(res.data.data)
window.location="/login"

// response 
// 1 data mil axios
// 2 data mil backend

  }).catch(err=>
    {
      console.log(err)
    })


}


const handleImage=(e) => // fonction 

{
  setImg(e.target.files[0])
}







  return (
    <div>


 <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center" style={{backgroundColor: '#7885' ,height: "700px" , width:"500px"}}>
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4" onSubmit={onSubmitHandler} >

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="firstname" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example1c">first Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="lastname" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example1c">last Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" name="email" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example3c"> Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control"  name="password" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>


                     
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

          {// adressL
          }


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control"  name="adressL" onChange={handleChange}/>
                      <label className="form-label" htmlFor="form3Example4c">AdressL</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="file" id="form3Example4c" className="form-control" name="image" onChange={handleImage} />
                      <label className="form-label" htmlFor="form3Example4c">Image</label>
                    </div>
                  </div>

                 
                
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img style={{height: "350px" , width:"500px", marginLeft:250}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Register