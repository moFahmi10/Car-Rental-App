import Navbar from "./Navbar";
import {useState} from "react";
import axios from "axios";


const Profile = () => {
    const [view,setView] = useState(true)
    const[view2,setView2] = useState(false)
    const[blogs,setBlogs] = useState(null)
    var email = sessionStorage.getItem("email")

    const click = async (e) => {
        e.preventDefault()
        let response = axios.get('http://localhost:8080/api/v1/reservation/getReservationByEmail/' + email)
        let data = (await response).data
        console.log(data)
        setBlogs(data)
        setView(false)
        setView2(true)
    }
    return ( 
      <div className="profile">
        <Navbar/>
        <br></br>
            <div>
                <h2>Email: {sessionStorage.getItem("email")}</h2>

            </div>
          {view && <button className="Rent" onClick={click}>View Reservations</button>}
          <br/>
          {view2 && <table >
    <tr>
    <th>Reservation no.</th>
    <th>Car Plate</th>
    <th>Total Payment</th>
    <th>Pickup date</th>
    <th>Return date</th>
    <th>Payment status</th>

</tr>

    {blogs.map(blog => (
        <tr>
            <td>{blog.reservation_number}</td>
            <td>{blog.plate}</td>
            <td>{blog.total_price}</td>
            <td>{blog.pickup_date}</td>
            <td>{blog.return_date}</td>
            <td>{blog.paid}</td>
        </tr>
    ))
    }
      </table>}





     
     
     
     </div>
     );
}
 
export default Profile;