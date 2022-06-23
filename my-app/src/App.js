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
        <Route path ='/user' >
          <Route path =':username' element ={<ShowGitHubUser/>} />
        </Route>
        <Route path ='/' element={<Welcome />} />
        <Route path ='/counter' element={<Counter/>} />
        <Route path='*' element={<h1>Error 404 page not found</h1>} />
      </Routes>
    </div>
    <div>
      <Link to="/counter">Counter</Link>
      <Link to ="/user"> Git Profile</Link>
      <Link to="/">Welcome</Link>
    </div>
    </>
    
  )
}



