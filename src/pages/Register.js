import NavMenu from "../components/NavMenu";
import { useState } from 'react';
import axios from 'axios';


function Register() {

    const [vrednosti, setVrednosti] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleRegister() {
        var uneteVrednosti = {
            username: vrednosti.username,
            email: vrednosti.email,
            password: vrednosti.password
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/register`, uneteVrednosti).then(res => {
                if (res.data.status === 200) {
                    alert(res.data.message)
                }
                else {
                    alert('Greska')
                }
            });
        });
    }

    return (
        <div className="register-div">
            <NavMenu />
            <div className="register-form">
                <h2 id="register-naslov" className="mt-5">Register</h2>
                <div className="mb-3 mt-3">
                    <label>Username: </label>
                    <input type="text" className="form-control" value={vrednosti.username} onChange={e => setVrednosti({ ...vrednosti, username: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="form-label">Email: </label>
                    <input type="email" className="form-control" value={vrednosti.email} onChange={e => setVrednosti({ ...vrednosti, email: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="form-label">Password: </label>
                    <input type="password" className="form-control" value={vrednosti.password} onChange={e => setVrednosti({ ...vrednosti, password: e.target.value })} />
                </div>

                <button type="button" onClick={handleRegister} id="btn" className="btn btn-primary mt-3">Register</button>
            </div>



        </div>
    );
}

export default Register;