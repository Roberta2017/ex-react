import { useGithubUser } from './useGithubUser'



export default function HookGithubUser({username}){
    const { object, error } = useGithubUser(username)
    return(
        <div>
            {object && <h1>{`name: ${data.login}`}</h1>}
            {error && <h2>error</h2>}
            {<img src={object.avatar_url} alt={`Avatar di: ${object.name}`}  />} 
            <img src={object?.avatar_url} alt={`Avatar di: ${object?.login}`} 
             />
        </div>
    )

}       