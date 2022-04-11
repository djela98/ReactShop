import { Link } from 'react-router-dom'

function NavMenu() {

    return (
        <div className="navmenu-div">
            <div className="home-navmenu">
                <Link className="active" to="/">Home</Link>
            </div>
            <div className="register-navmenu">
                <Link className="active" to="/register">Register</Link>
            </div>
            <div className="login-navmenu">
                <Link className="active" to="/login">Login</Link>
            </div>
        </div>
    );

}

export default NavMenu;