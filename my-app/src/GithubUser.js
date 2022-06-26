import { useGithubUser } from "./useGithubUser"
import { useEffect } from "react"

export default function GithubUser({ username }) {

 const { object, GitFetch  } = useGithubUser(username)

    useEffect(() => {

    }, [])

    return (
        <div>
            {object && <h1>{`name: ${object.name}`}</h1>}
        </div>
   
}
    
