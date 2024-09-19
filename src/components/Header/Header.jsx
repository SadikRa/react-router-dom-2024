import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex gap-6 items-center justify-center'>
                <Link className='hover:bg-orange-300 rounded-lg p-5' to="/">Home</Link>
                <NavLink className='hover:bg-orange-300 rounded-lg p-5' to="/users">Users</NavLink>
                <NavLink className='hover:bg-orange-300 rounded-lg p-5' to="/posts">Posts</NavLink>
                
                <Link className='hover:bg-orange-300 rounded-lg p-5' to="/about">About</Link>
                <Link className='hover:bg-orange-300 rounded-lg p-5' to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;