import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {ShowGitHubUser} from './ShowGitHubUser';




export function App(){
  return(
    <div>
      <Routes>
        <Route path ='/:username' element ={<ShowGitHubUser />} />
      </Routes>
    </div>
  )
}



