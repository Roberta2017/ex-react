


function saluto(name){
  return(
    <h1>hello {name} </h1>
  )
}
function App() {
  return (
    <div className="App">
     {saluto('piero')}


    </div>
  );
}





export default App;
