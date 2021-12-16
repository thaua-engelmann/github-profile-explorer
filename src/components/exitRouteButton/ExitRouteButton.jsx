import './exitRouteButton.scss';
import {useNavigate} from 'react-router-dom';

// React-Icons;
import { CgArrowLeft as ArrowLeft } from "react-icons/cg";

const ExitRouteButton = () => {

    const navigate = useNavigate();

    const backHome = () => {
        navigate(-1);
    }

    return (
        <div className="exit-route" onClick={backHome}>
            <button className="exit-route-button">
                <ArrowLeft />
            </button>
        </div>
    )
}

export default ExitRouteButton;
