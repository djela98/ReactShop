import NavMenu from "../components/NavMenu";
import { useState } from 'react'

function Login() {

    const [vrednosti, setVrednosti] = useState({
        username: '',
        password: ''
    });

    return (
        <div className="login-div">
            <NavMenu />
            <div className="register-form">
                <h2 id="login-naslov" className="mt-5">Login</h2>
                <div className="mb-3 mt-3">
                    <label>Username: </label>
                    <input type="text" className="form-control" value={vrednosti.username} onChange={e => setVrednosti({ ...vrednosti, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="form-label">Password: </label>
                    <input type="password" className="form-control" value={vrednosti.password} onChange={e => setVrednosti({ ...vrednosti, password: e.target.value })} />
                </div>

                <button type="button" id="btn" className="btn btn-primary mt-3">Login</button>
            </div>
        </div>
    );
}

export default Login;