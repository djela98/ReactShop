import HomePrikazCokolada from '../components/HomePrikazCokolada';
import NavMenu from './../components/NavMenu';

function Welcome() {

    return (
        <div className="welcome-div">
            <NavMenu />
            <HomePrikazCokolada />
        </div>
    );
}

export default Welcome;