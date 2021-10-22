import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import navbar from './navbar';
// import Contact from './components/contact/Contact';
// import routing from './router';

function App() {
  return (
    <Router>
      <div className="App">
        {/* {routing }
        <Contact /> */}
        <navbar/>
      </div>
    </Router>
  );
}

export default App;
