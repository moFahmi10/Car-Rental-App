import AdminNav from "./AdminNav";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


const PreRep = () => {
    const history = useHistory();
    const [status1, setStatus1] = useState(false);
    const [status2, setStatus2] = useState(false);
    // const [status3, setStatus3] = useState(false);
    // const [status4, setStatus4] = useState(false);
    const [res, setRes] = useState("");
    const [res1, setRes1] = useState("");
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [params, setParams] = useState("");
    const [blogs,setBlogs] = useState(null);
    const [flag, setFlag] = useState(false);

        const select1 = async () => {

            let response = axios.get('http://localhost:8080/api/v1/reservation/getTotalincome')
            let data = (await response).data
            console.log(data)
            setRes1(data)
            setStatus1(true);
            setStatus2(false);
        }
        const select2 = async () => {
            let response = axios.get('http://localhost:8080/api/v1/reservation/getNumberOfReservations')
            let data = (await response).data
            console.log(data)
            setRes(data)
            setStatus1(false);
            setStatus2(true);

        }
        const submit = async () => {


            if (date1 === "" || date2 === "") {
                alert("Error")
                return false;
            } else if (date1 === date2) {
                alert("Error")
                return false;
            } else {

                console.log(params)
                let response = axios.get('http://localhost:8080/api/v1/reservation/searchByAdminDate/' + params)
                let data = (await response).data
                console.log(data)
                setBlogs(data)
                setFlag(true)
                //sessionStorage.setItem("blogs", data)
              //  window.location.href = "./report"
            }

        }

        return (
            <div>
            <div className="preRep">
                <AdminNav/>
                   <div className="preRep1">
                    <br></br>

                    <button onClick={select1}>Total Income</button>
                    <button onClick={select2}>Total Number of Reservations</button>
                </div>
                <br></br>
                {status1 && <div className="select1">
                    <h1>Total income = {res1} L.E</h1>
                    <br/>
                </div>}
                {status2 && <div className="select2">
                    <br/>
                    <br/>
                    <h1>Total number of reservations = {res} reservations</h1>
                    <br/>
                </div>}
                <label>Choose Date 1</label>

                <input id="date1" type="date"  onChange={e=>{setDate1(e.target.value)}} />

                <label>Choose Date 2</label>

                <input id="date2" type="date" onChange={e=>{setDate2(e.target.value); setParams(date1+","+e.target.value) }  }  />
                <br></br>
                <div className="Res">
                    <button onClick={submit}>Show Reservations Between Date 1 and Date 2 </button>
                </div>
                <br/><br/>
            </div>

                {flag &&<div>
                <table>
                    <tr>
                        <th>Reservation number</th>
                        <th>User's First Name</th>
                        <th>User's Last Name</th>
                        <th>User's Email</th>
                        <th>Car Plate</th>
                        <th>Car Brand</th>
                        <th>Car Model</th>
                        <th>Pickup Date</th>
                        <th>Return Date</th>
                        <th>Total price</th>
                        <th>Payment Status</th>

                    </tr>
                    <br></br>
                    {blogs.map(blog => (
                        <tr>
                            <td>{blog.reservation_number}</td>
                            <td>{blog.fname}</td>
                            <td>{blog.lname}</td>
                            <td>{blog.email}</td>
                            <td>{blog.plate}</td>
                            <td>{blog.manufacturer}</td>
                            <td>{blog.model}</td>
                            <td>{blog.pickup_date}</td>
                            <td>{blog.return_date}</td>
                            <td>{blog.total_price}</td>
                            <td>{blog.paid}</td>
                            <td></td>

                        </tr>
                    ))
                    }
                </table>

            </div>}
            </div>
        );


}
 
export default PreRep;