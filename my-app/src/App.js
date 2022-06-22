import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import {ShowGitHubUser} from './ShowGitHubUser';
import { Welcome } from './Welcome';
import Counter from './Counter'



export function App(){
  return(
    <>
    <div>
      <Routes>
        <Route path ='/:username' element ={<ShowGitHubUser />} />
        <Route path ='/' element={<Welcome />} />
        <Route path ='/counter' element={<Counter/>} />
      </Routes>
    </div>
    <div>
      <Link to="/counter">Counter</Link>
      <Link to ="/githubuser/Roberta2017"> Git Profile</Link>
      <Link to="/">Welcome</Link>
    </div>
    </>
    
  )
}



