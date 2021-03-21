import { Route, Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

const Menu = () => {
    return (
        <div className="menu">
            <Link className="btn" to='/about'>About Us</Link>
            <Link className="btn" to='/contact'>Contact Us</Link>
            <Link className="btn" to='/'>Home</Link>

            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/' exact component={Home} />
        </div>
    )
}

export default Menu