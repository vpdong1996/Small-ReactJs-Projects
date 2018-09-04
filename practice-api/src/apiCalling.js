import axios from 'axios';
import * as Config from './constants/Config';


// export const getApi = (endpoint) =>{
//     return axios.get(`${Config.API_URL}/${endpoint}`).catch((err) =>{
//         console.log(err);
//     })
// };
// export const postApi = (endpoint) =>{
//     return axios.post(`${Config.API_URL}/${endpoint}`).catch((err)=>{
//         console.log(err);
//     })
// }
export default function callApi(method,endpoint,body){
    return axios({
        method : method,
        url : `${Config.API_URL}/${endpoint}`,
        data : body
    }).catch(err =>{
        console.log(err);
    })
}