import './App.css';
import Person from './components/Person';
import ErrorBoundary from './error-boundary/ErrorBoundary';
import Err1 from './error-boundary/Err1';
import PersonList from './components/PersonList';
import { lazy, Suspense, useState } from 'react';
import PersonDetail from './components/PersonDetail';
// import { add } from './calculator/calculator';

// Lazy loading components using React.lazy

const PersonDetailComp = lazy(()=>import ('./components/PersonDetail'))

function App() {
  const [showApp, setshowApp] = useState(false)
  const calculate = ( n1, n2 ) => {
    // const total = add( n1, n2 );
    // console.log( "total", total );
    
  /*  Lazy loading i.e., see network tab when clicked on button to see the loading of file */
    
    import( './calculator/calculator' ).then( calculator => {
      console.log( 'calculator', calculator );
      const total = calculator.add( n1, n2 )
      console.log('total',total);
    })
  }
  return (
    <div className="App">
      <ErrorBoundary>
        <Person/>
      </ErrorBoundary>
      <Err1>
        <PersonList/>
      </Err1>
      <button onClick={ () => { calculate( 10, 20 ) } }>Add</button>
      {
        showApp && <Suspense fallback={ <p>Loading...</p> }>
          <PersonDetail/>
        </Suspense>
      }

      {/* {
        Normal loading 
      {showApp && <PersonDetail/>}
      } */}
      <button onClick={()=>{setshowApp(true)}}>Show App</button>
    </div>
  );
}

export default App;
