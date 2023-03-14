import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='header'>
            <Link to='/' className='home'>Quiz Me</Link>
            <hr className='underline-title' />
        </div>
    )
}

export default Header;