
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username){

    const { object, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)
    const { object, error } = useSWR( username ? `https://api.github.com/users/${username}` : null , fetcher)

    return{
        object: object,
        object,
        error: error,
    }
} 