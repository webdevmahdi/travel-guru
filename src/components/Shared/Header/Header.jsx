import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>

            <NavLink className='text-secondary' to='/'>Home</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/destination'>Destination</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            
    </div>
  )
}

export default Header