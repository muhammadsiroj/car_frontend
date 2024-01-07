import { Link } from "react-router-dom";
import user from '../../images/user.png'

const AdminNavbar = () => {
    return (
        <>
        <div className="navbar">
                <button className="navbar_btn" >
                    <Link className='navbar_btn' to='/home'>
                    Asosiyga qaytish
                    </Link>
                </button>
            </div>
        </>
    );
}
 
export default AdminNavbar;