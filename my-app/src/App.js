import './App.css';
import CarDetails from './CarDetails'


function App() {
  return (
    <div className="App">
      <CarDetails initialDate={{model:'modello', color:'colore', year:'anno'}}/>
    </div>
  );
}

export default App;
