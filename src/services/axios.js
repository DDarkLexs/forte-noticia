import axios from 'axios'

export const axiosIns = axios.create({
    baseURL:'https://newsapi.org/v2/',
    params:{ apiKey:'43ab427af8574511b4fea3530095f5f6' },
    'Access-Control-Allow-Origin':true

})


export default axiosIns

// axiosIns.get('/top-headlines',{ params: {   language: 'pt', } }).then((response) => {

    
//     // alert('ok')

//     console.log(response)
// })