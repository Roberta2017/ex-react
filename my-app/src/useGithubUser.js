import { useEffect, useState } from 'react'
import GithubUser from './GithubUser'


export function useGithubUser(username) {
    const [object, setObject] = useState(username)   // ho utilizzato object al posto di date per non confondermi, solo per ricordare che object sono i dati
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)



    async function useFetch() {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.status === 200) {
                const info = await response.json()
                setObject(info)
                console.log(info)
            }
            else {
                throw new Error('non è possibile reperire le informazioni')
            }
            setLoading(false)
        } catch (errors) {
            return setError(errors)
        }
    }



        useEffect(() => {
            useFetch()
        
        return { object, error, loading }
   
}, [])
 }