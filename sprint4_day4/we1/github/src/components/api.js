import axios from "axios";

export function Gitadd(params={}){
    return axios.get(`https://api.github.com/search/users?q=ravi&per_page=5&page=2`,{
        params:{
            per_page:params.per_page,
            page:params.page,
            _sort:params.sort
        }   
        
    }) 
    }

