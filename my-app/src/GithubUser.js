import { useGithubUser } from "./useGithubUser"


export default function GithubUser({ username }) {

 const { object, error , loading  } = useGithubUser(username)

   
    return(
 <div>
          {loading && <h1>Loading...</h1>}
          <h1>{object.login}</h1>
          <h1>{object.name}</h1>
          {error && <h1>{error.message}</h1>}
        </div>

    )
       
   
}
    
