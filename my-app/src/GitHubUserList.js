import { useState } from "react";
import GitHubUser from './GitHubUser'

function GitHubUserList() {
    const [newUser, setUser] = useState('');
    const [utent, setUtent] = useState([]);


const handleInputChange = (event) => {
    setUtent(event.target.value);
}

const addUser = (event) => {
    setUser((state) => [...state, newUser]);
}

return(
    <div>
        <input type="text" name="username" value={newUser} onChange={handleInputChange} />
        <button name="NewName" onClick ={addUser}>Aggiungi</button>
        {utent.map((user , index)=>(<GitHubUser key={index} username={user}/>))}
    </div>
)}


export default GitHubUserList
