import NavMenu from './../components/NavMenu';
import { Link } from "react-router-dom";


function Dashboard() {

    return (
        <div className="dashboard-div">
            <NavMenu />
            <Link to="/dodaj-cokoladu"><button type="button" id="btn-nova-cokolada" className="btn btn-primary">Nova čokolada</button></Link>

        </div>
    );
}

export default Dashboard;