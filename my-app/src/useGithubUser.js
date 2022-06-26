import {useState} from 'react'


export function useGithubUser(){
    const [object, setObject] = useState('')

    function GitFetch({username}){
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        }).then(json => {
            
            setObject(json)
        })
    }return{
        object: object,
        GitFetch: GitFetch
    }

}


