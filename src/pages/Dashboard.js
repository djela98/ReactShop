import NavMenu from './../components/NavMenu';
import { Link } from "react-router-dom";
import PrikazCokolada from '../components/PrikazCokolada';


function Dashboard() {

    return (
        <div className="dashboard-div">
            <NavMenu />
            <Link to="/dodaj-cokoladu"><button type="button" id="btn-nova-cokolada" className="btn btn-primary">Nova čokolada</button></Link>
            <PrikazCokolada />
        </div>
    );
}

export default Dashboard;