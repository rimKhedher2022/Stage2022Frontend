import React, { useState ,useEffect } from 'react'
import ProductService from '../../services/ProductService'
import SubcategoryService from '../../services/SubcategoryService'

const Create = () => {




const [image,setImg] = useState("")
const [subcategories,setsubcategories] = useState([])

const [data,setData]=useState({})





const getallsubcategories =()=>{

  SubcategoryService.getall().then(res=>
   
   {
       console.log(res)
       setsubcategories(res.data.data)
   }).catch(err=>
       {
           console.log(err)
       })
   

}

useEffect(()=>
        {
          getallsubcategories()
        },[])


const handleChange =(e)=>
{
  setData({
 ...data,  // previous state meta3 data
 [e.target.name]:e.target.value

  })
}


const onSubmitHandler=(e)=>
{
  e.preventDefault()
 const formdata = new FormData()
 formdata.append("photo",image)
 formdata.append("refproduct",data.refproduct)
 formdata.append("description",data.description)
 formdata.append("price",data.price)
 formdata.append("stock",data.stock)
 formdata.append("subcategory",data.subcategory)



ProductService.create(formdata).then(res=>{

  console.log(res)
  setData(res.data.data)
window.location="/getallproducts"
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


<section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Ajout de produit</p>
                <form className="mx-1 mx-md-4" onSubmit={onSubmitHandler}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="refproduct" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example1c">refproduct</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name="description" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example1c">description</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" className="form-control" name="price" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example3c"> price</label>
                    </div>
                  </div>



                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                        <select type="text" id="form3Example4c" className="form-control" name="subcategory" onChange={handleChange}>

                          <option>
                            ---ajouter subcategory  ---
                          </option>
                      {subcategories.map((item)=>{

                        return (
                          <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                        )
                      })}
                     </select>
                      
                      <label className="form-label" htmlFor="form3Example4c">subcategory</label>
                     
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="file" id="form3Example4c" className="form-control"  name="image" onChange={handleImage} />
                      <label className="form-label" htmlFor="form3Example4c">image</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control" name="stock" onChange={handleChange} />
                      <label className="form-label" htmlFor="form3Example4c">stock</label>
                    </div>
                  </div>

                 
                
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">ajouter</button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img style={{height: "350px" , width:"500px", marginLeft:250}} src="https://img.freepik.com/vecteurs-libre/mains-tendues-vers-boite-nourriture-personnes-prenant-produits-boite-carton-illustration-vectorielle-plane-epicerie-aide-humanitaire-concept-livraison-nourriture-pour-banniere-page-web-destination_74855-24840.jpg?t=st=1658945259~exp=1658945859~hmac=0836a776dbcf7cb4f25f347f51eab4ec7bbabe053ea7b62dfe0091099b99c301" className="img-fluid" alt="Sample image" />
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

export default Create