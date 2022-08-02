
import './App.css';


import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";


import Home from './views/Home/Home';
import Register from './views/users/Register';
import Login from './views/auth/Login';
import Profil from './views/users/Profil';
import GetallUsers from './views/users/GetallUsers';
import Updateuser from './views/users/Updateuser';
import GetAllProducts from './views/products/GetAllProducts';
import Create from './views/products/Create';
import UpdateProduct from './views/products/UpdateProduct';


function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/profil" element={<Profil/>}/>
  <Route path="/getallusers" element={<GetallUsers/>}/>
  <Route path="/update/:id" element={<Updateuser/>}/>

 
  <Route path="/getallproducts" element={<GetAllProducts/>}/>
  <Route path="/createPro" element={<Create/>}/>
  <Route path="/updateProduct/:id" element={<UpdateProduct/>}/>





</Routes>




</BrowserRouter>


 
  );
}

export default App;
