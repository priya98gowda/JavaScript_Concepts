import './App.css';
import { useState } from 'react';
import MyComponent from './components/MyComponent';
import UseEffectWithArray from './components/UseEffectWithArray';

function App() {
  const [isRender, setisRender] = useState(true)
  return (
    <div className="App">
      <button onClick={ () => { setisRender( false ) } }>Remove Component</button>
      {isRender && <MyComponent /> }
      <UseEffectWithArray/>
    </div>
  );
}

export default App;
