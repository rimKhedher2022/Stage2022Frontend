import http from "./AxiosContext"

const register = (data) => // narbit bin el back w front

{
    return http.post("/clients/register",data) 
}


const remove =(id) =>

{
    return http.delete(`/clients/delete/${id}`)
}


    


    const getall=()=>
    {
        return http.get("/clients/getall")
    }


    
const update = (id,data)=>
{
    return http.put(`/clients/update/${id}`,data)
}


const getbyid = (id)=>
{
    return http.get(`/clients/getById/${id}`)
}

export default{
    register ,
    getall,
    remove, 
    update,
    getbyid
}