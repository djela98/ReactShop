import axios from 'axios';
import { Link } from 'react-router-dom'

function NavMenu() {

    function handleLogout() {
        axios.post(`api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_username');
                localStorage.removeItem('role');
                alert('Logout uspešan')
            }
        });
    }

    var prikazNavMenija = '';
    if (!localStorage.getItem('auth_token')) {
        prikazNavMenija = (
            <div className='reg-login'>
                <div className="register-navmenu">
                    <Link className="active" to="/register">Register</Link>
                </div>
                <div className="login-navmenu">
                    <Link className="active" to="/login">Login</Link>
                </div>
            </div>
        )
    } else {
        prikazNavMenija = (
            <div>
                <div className="logout-navmenu">
                    <button id="logout-button" type='button' onClick={handleLogout} className="active btn btn-warning">Logout</button>
                </div>
            </div>
        )
    }


    var adminDashboard = '';
    if (localStorage.getItem('role') === 'admin') {
        adminDashboard = (
            <div className="dashboard-navmenu">
                <Link className="active" to="/dashboard">Dashboard</Link>
            </div>
        )
    }

    return (
        <div className="navmenu-div">
            <div className="home-navmenu">
                <Link className="active" to="/">Home</Link>
            </div> <div className="convertor-navmenu">
                <Link className="active" to="/convertor">Convertor</Link>
            </div>
            {adminDashboard}
            {prikazNavMenija}
        </div>
    );

}

export default NavMenu;