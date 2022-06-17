import React, { useEffect } from "react";
import { useState } from 'react'

function GitHubUser({ username }) {
const [object, setObject] = useState('')

    useEffect(() => {
        


        async function gitFetch() {

            const git = await fetch(`https://api.github.com/users/${username}`)
            const response = await git.json()
            console.log(response)

            setObject(response)

        } gitFetch()
    }

        , [username])










    return (
        <div>
            {object.name}
        </div>
    )
}

export default GitHubUser