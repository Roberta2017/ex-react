import React from 'react'
import {inputTracker } from './inputTrack'



export function Forms(){
    const {username,password,saveValue,inputHandler} = inputTracker()

    return(
        <>
        <form id="prova">
            <input type='text' name='username' onChange={inputHandler} value={username} />
            <input type='password' name='password' onChange={inputHandler} value={password} />
        </form>
        <button onClick={saveValue}>Save Me</button>


        </>
    )
}