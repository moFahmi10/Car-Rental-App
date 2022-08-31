import { Link } from "react-router-dom";

const logged = () => {
    return (

        <nav className="Logged">

        <div className="links">
            <Link to = "/admin">Admin</Link>
             <Link to="/service">Service</Link>
             <Link to="/search">Search</Link>  
  
         </div>

     </nav>

    );
}
export default logged;


