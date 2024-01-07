import { Link } from 'react-router-dom';
const AuthNavbar = () => {
    return (
        <>
            <div className="auth_navbar">
                <Link className='auth_navbar_btn' to='/login'>
                <button className="auth_navbar_btn" >
                    Login
                </button>
                </Link>
                <Link className='auth_navbar_btn' to='/register'>
                <button className="auth_navbar_btn" >
                   Register
                </button>
                </Link>
            </div>
        </>
    );
}
 
export default AuthNavbar;