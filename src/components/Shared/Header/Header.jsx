
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
            <Link to='/destination'>Destination</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            
    </div>
  )
}

export default Header