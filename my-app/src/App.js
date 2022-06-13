import React from 'react';
import './index.css';
import { Container } from './Container';
import {Welcome} from './Welcome'

function App() {
  return (
    <Container>

     <h1>La mia applicazione in react</h1>
     <Welcome/>
    </Container>
  );
}

export default App;
