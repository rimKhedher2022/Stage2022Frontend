import React, { useState,useEffect } from 'react'
import AuthServices from '../../services/AuthServices'

const Login = () => {   //na@gmail.com , motdepasse : 222
                        //rim1@gmail.com , motdepasse : 123456789


    const [data,setData]=useState({})
    const initialValues = { username: "", email: "", password: "" };

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange=(e) => // na7ki me3a el inputs
    {
        const { name, value } = e.target;
    setData({ ...data, [name]: value });
    };

 const onSubmitHandler =(e)=>

 {
    e.preventDefault()
    AuthServices.login(data).then(res=>
        
        {
            console.log(res)
            setData(res.data.data)
            window.location="/"// home
            localStorage.setItem("user",JSON.stringify(res.data.data))  // 
          localStorage.setItem("token",JSON.stringify(res.data.AccessToken)) // 29-07-2022

        }).catch(err=>
            {
                    console.log(err)
                    setFormErrors(validate(data,err));
                    setIsSubmit(true);
            })
 }


 useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [formErrors]);
  const validate = (values,err) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if( err.response.status === 406 )

    {
        errors.email = err.response.data.message // mawjoud mil serveur

    }

  
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }


    if( err.response.status === 403 )

    {
        errors.password = err.response.data.message

    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };






  return (
    <div>


        <div class="login-container">
                
                <div class="login-box animated fadeInDown">
                    
                    <div class="login-body">
                        <div class="login-title"><strong>Welcome</strong>, Please login</div>
                        <form class="form-horizontal" onSubmit={onSubmitHandler}>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="email" class="form-control" name='email' placeholder="email" value={data.email} onChange={handleChange}/>
                            </div>
                                <div style={{color:"yellow"}}>
                                        <p>{formErrors.email}</p>
                                        
                                </div>
                            


                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <input type="password" class="form-control" placeholder="Password" name='password'  value={data.password} onChange={handleChange}/>
                            </div>

                               <div style={{color:"yellow"}}>
                                  <p>{formErrors.password}</p>
                                        
                                </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-6">
                                <a href="#" class="btn btn-link btn-block">Forgot your password?</a>
                            </div>
                            <div class="col-md-6">
                                <button type='submit' class="btn btn-info btn-block">Log In</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div class="login-footer">
                        <div class="pull-left">
                            &copy; 2014 AppName
                        </div>
                        <div class="pull-right">
                            <a href="#">About</a> |
                            <a href="#">Privacy</a> |
                            <a href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Login
