
import http from "./AxiosContext"

const getall=()=>
{
    return http.get("/subcategories/getall")
}

export default{
    
    getall,
    
}