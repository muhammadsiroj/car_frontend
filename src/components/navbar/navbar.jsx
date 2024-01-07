import { Link } from 'react-router-dom';
import user from '../../images/user.png'
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <button className="navbar_btn" >
                    <Link className='navbar_btn' to='/admin'>
                    <img className='navbar_img' src={user} alt="" />
                    Admin o‘tish
                    </Link>
                </button>
            </div>
        </>
    );
}
 
export default Navbar;