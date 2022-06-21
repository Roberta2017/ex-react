import React, { useEffect } from "react";
import { useState } from 'react'

function GitHubUser({ username }) {
    const [object, setObject] = useState(false)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=> response.json())
        .then((json)=>{
            return(
                setObject(json),
                console.log(json)
            )
       })
    },[username])

    return <div>
        {object && <h1>{object.username}</h1>}
        <img src ={object.avatar_url} alt="" />
        <h2>{object.login}</h2>
        <p>City: {object.location}</p>
        
    </div>

}

export default GitHubUser