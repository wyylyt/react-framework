import axios from "axios";
export default function axiosToken(params) {
    return new Promise((resolve,reject)=>{
        let token = sessionStorage.getItem('token');
        let data = Object.assign(params,{
            headers: { 'Authorization': token },
        })
        axios(data)
            .then(response => {
                resolve(response);
            },err => {
                reject(err);
            })
            .catch(error => {
                reject(error);
            })
    })
    
}