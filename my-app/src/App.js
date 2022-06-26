import useGithubUser from './useGithubUser'

import GithubUser from "./GithubUser";
export default function App() {

  return (
    <>
        <Routes>
             <Route path="/welcome" element={<Welcome />} /> 
            <Route path="/user" element={<GithubUser />}>
                <Route index element={<p>aggiungi</p>} />
                <Route path=":username" element={<GithubUser />} />
            </Route>
        
         
            <Route path="*" element={<div><p>Not Found</p><Link to="/welcome">Go Home</Link></div>}>
            </Route> 
            <Route path="/usegithubuser" element={<useGithubUser username="undefined" />} />
            <Route path="/usegithubuser" element={<useGithubUser username={''} />} />


        </Routes>
    </>
  );
}