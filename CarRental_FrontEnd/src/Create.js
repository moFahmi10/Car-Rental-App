import React, {Component, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const Signup = ()=> {
    const history = useHistory();
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [cpass,setCPass] = useState("");
    const [bdate, setBdate] = useState("");
   // const [region, setRegion] = useState("");

    const handleForm = async(e) => {
        e.preventDefault()
        let response = axios.get('http://localhost:8080/api/v1/user/checkEmail/' + email)
        let emailCheck = (await response).data
        if (email === '') {
            alert("Please Enter Your Email")
            return false;
        } else if (pass === '') {
            alert("Please Enter Your Password")
            return false;
        } else if (cpass === '') {
            alert("Please Confirm your Password")
            return false;
        } else if (pass !== cpass) {
            alert("The Password is not the same")
            return false;
        } else if (emailCheck === false) {
            alert("Email already exists !")
        }
        else {
            var dateString = new Date(bdate).toISOString().split("T")[0];
        console.log(fname)
            console.log(lname)
            var jsonData = {
                "fname": fname.toString(),
                "lname": lname.toString(),
                "email": email.toString(),
                "password": pass.toString(),
                "bdate": dateString,
            }
            console.log(jsonData)
            fetch('http://localhost:8080/api/v1/user', {  // Enter your IP address here

                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
            })
           history.push("./")
        }


    }



        return(
            <div className="create">
                <form>
                    <h2>Registration</h2>
                    <label>Firt Name: </label>
                    <input
                        type="text" id="fname"
                        required
                        onChange={e => setFname(e.target.value)}
                    />
                    <label>Last Name: </label>
                    <input
                        type="text" id="lname"
                        required
                        onChange={e => setLname(e.target.value)}
                    />
                    <label>Email: </label>
                    <input
                        type="email" id="email"
                        required
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label>Password: </label>
                    <input
                        type="password" id="psw"
                        required
                        minLength={8}
                        onChange={e => setPass(e.target.value)}
                    />
                    <label>Confirm Password: </label>
                    <input
                        type="password" id="cpsw"
                        required
                        minLength={8}
                        onChange={e => setCPass(e.target.value)}    />



                    <label>BirthDate</label>
                    <input
                        type="date" id="bdate"
                        required
                        onChange={e => setBdate((e.target.value))} />

                    <label>Agree on our Terms</label>
                    <input
                        type="checkbox"
                        required/>
                    <button onClick={handleForm}>Submit</button>
                    <br/>
                    <br/>
                     <button onClick={()=>{history.push("./")}}>Back</button>


                </form>
            </div>
        );


}
export default Signup;