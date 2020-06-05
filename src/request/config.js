import axios from 'axios'
axios.interceptors.request.use((config) =>{
    return config
},(err) =>{
    return Promise.reject(err)
})
axios.interceptors.response.use((response) =>{
    return response;
},(err)=>{
    return Promise.reject(err)
})
export { axios }