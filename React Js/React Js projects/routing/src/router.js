import { Route, Link } from 'react-router-dom'
import About from './components/about/About'
import Home from './components/home/Home'
const routing = (
    
        <div>
            <div>
                 <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={About}/>
    </div>
    
)
export default routing

