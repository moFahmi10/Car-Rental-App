
import { Link } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {AiFillCar} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi"
import {CgProfile} from "react-icons/cg"



const Navbar = () => {
    return ( 
       
       <nav className="navbar">
           <h1>Car Rental System</h1>
           <div className="links">
           <Link  className="l" to="/profile" >  Profile <CgProfile/> </Link>
           <Link  className="l" to="/search" >  Search <AiOutlineSearch/> </Link>
           <Link  className="l" to="/service">Service <AiFillCar/></Link>
           <Link  className="l" to="/">Log Out <FiLogOut/></Link>
               </div>
              
       </nav>
      
     );
}
 
export default Navbar;