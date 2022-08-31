import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {VscSignIn} from "react-icons/vsc"

const Homenav = () => {
    return ( 
        <nav className="homenav">
            <h1>Car Rental System</h1>
            <div className="links">
                
                <Link to="/create">Register <VscSignIn/></Link>
                

            </div>
        </nav>
     );
}
 
export default Homenav;