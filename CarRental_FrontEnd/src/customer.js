import AdminNav from "./AdminNav";

import axios from "axios";
import React, {useState} from "react";
import BlogList from "./BlogList";
import UserList from "./UserList";

const Customer = () => {
    const [objects, setObjects] = useState(null)
    const [view, setView] = useState(false)
    const [view1, setView1] = useState(true)
    const [params, setParams] = useState (""+","+""+","+"")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")

    const Search = async () => {
        //console.log(params)
        let response = axios.get('http://localhost:8080/api/v1/user/search/'+ params )
        let data = (await response).data
        //  console.log(data)

        console.log(data)

        setObjects(data)
        console.log(objects)
        setView(true)
        setView1(false)
    }
    const View = () =>{
        setView(true)
    }


    return ( 
        <div className="customer">
            <AdminNav/>
            <label>Search with First Name</label>
            <input type="text"  onChange={e=>{setFname(e.target.value); setParams(""+","+e.target.value+","+"")}}/>
            <label>Search with Last Name</label>
            <input type="text" onChange={e=> {setLname(e.target.value); setParams(""+","+fname+","+e.target.value)}} />
            <label>Search with Customer Email</label>
            <input type="email" onChange={e=>{setEmail(e.target.value); setParams(e.target.value+","+fname+","+lname)}}/>
            <button  onClick={Search} >Search</button>

            {view && <div>
                <UserList blogs={objects} title="All Blogs"/>
            </div>}
        </div>
     );
}
 
export default Customer;