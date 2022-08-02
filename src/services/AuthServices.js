import http from "./AxiosContext"

const login = (data) => // narbit bin el back w front

{
    return http.post("/auth/login",data)
}

   


export default{
    login
}