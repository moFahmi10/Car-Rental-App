import { Link } from "react-router-dom";
import { FaGithub}  from "react-icons/fa";
import {AiFillCar} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"
const AdminNav = () => {
    return ( 
        <nav className="adminNav">
            <h1>Car Rental System</h1>
            <div className="links">
                <Link to="/customer">Customer <BsFillPersonFill/></Link>
                <Link to="/car">Car <AiFillCar/></Link> 
                <Link to="/PreRep">Report <FaGithub/></Link>
                <Link to="/">Log Out <FiLogOut/></Link>
            </div>
        </nav>
     );
}
 
export default AdminNav;