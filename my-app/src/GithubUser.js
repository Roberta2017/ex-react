import useGithubUser from './useGithubUser'

function GithubUser({username}){
    const {object, error, isLoading} = useGithubUser(username)
    return <>
    {isLoading && <h1>Loading..</h1>}
    {error && <h1>{error.testo}</h1>}
    {Object && <div><h1>{object.login}</h1></div>}
    <img src = {object.avatar_url} ></img>
    </>
}export default GithubUser