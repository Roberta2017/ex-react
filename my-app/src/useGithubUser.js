import useSWR from 'swr'


export function useGithubUser(){
    const fetcher=url=>fetch(url).then((response)=>response.json());
    const {object, error}= useSWR(`https://api.github.com/users/${username}`,fetcher)
    return{object,error, isLoading: !object && !error};


  
}


