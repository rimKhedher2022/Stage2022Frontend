
import http from "./AxiosContext"

const create =(data)=>
{
    return http.post("/products/create",data)
}

const getall=()=>
{
    return http.get("/products/getall")
}

const getbyid =(id)=>

{
    return http.get(`/products/getbyId/${id}`) 
}

const remove =(id) =>

{
    return http.delete(`/products/delete/${id}`)
}







const update =(id,data)=>
{
    return http.put(`/products/update/${id}`,data)
}



export default{
    create,
    getall,
    update,
    remove,
    getbyid
}