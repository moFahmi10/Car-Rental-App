import Homenav from "./HomeNav"
import { useHistory } from "react-router-dom";
import React, {useCallback, useEffect} from "react";
import  { useState} from "react";
import axios from "axios";
const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [psw, setPassword] = useState("");
    const [check, setCheck] = useState(null);
    const [verify, setVerify] = useState(null);
    const [as,setAs] = useState(null)

    const submit = async(e) =>{

        if (email ==="admin@admin.com" && psw ==="adminadmin"){
            history.push("/admin")
        }
        else{
            e.preventDefault()
            let response = axios.get('http://localhost:8080/api/v1/user/' + email + '/' + psw)
            let data = (await response).data
            if (data){
                sessionStorage.setItem("email", email);
                history.push('/service')
            }
            else{
                alert("Incorrect email or password")
            }
        }

    }

    // useEffect( ()=>  {
    //          alert(email)
    //         if (data === false) {
    //             alert("Wrong email or password!")
    //         }
    //         else if(data ===null){
    //
    //         }
    //         else {
    //
    //
    //         }
    //     },[data])
    //
    //  useEffect(async () => {
    //      let url = 'http://localhost:8080/api/v1/user/' + email + '/' + psw
    //      let response = await fetch(url)
    //      response = await response.json()
    //      dataSet(response)
    //      //alert(response)
    //
    //  },[email,psw])

    return (
        <div className="home">
            <Homenav/>
            <form>
                <h1>Find Your Car</h1>
                <label>Email</label>
                <input
                    type="email" id="email1"
                    required
                    onChange={e => setEmail(e.target.value)}

                />
                <label>Password</label>
                <input
                    type="password" id="psw"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                {/*} <label>Admin</label>
         <input type="checkbox" id="check"/>
    */}
                <button onClick={submit
                }
                        className="button">Sign In</button>

            </form>
        </div>


    );

}
export default Login ;