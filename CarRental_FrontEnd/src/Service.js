import { Link, Router } from 'react-router-dom';
import Navbar from './Navbar';
import React, {useState} from "react";
import axios from "axios";
import Login from "./Home";
import BlogList from "./BlogList";
import search from "./Search";

function Service() {
    const [cars, setCars] = useState(null)
    const [view, setView] = useState(false)
    const [view1, setView1] = useState(true)

    const [region, setRegion] = useState("")
    const Submit = async () => {
        let response = axios.get('http://localhost:8080/api/v1/car/getByRegion/'+ region )
        let data = (await response).data
        console.log(data)
        setCars(data)
        setView(true)
        setView1(false)
    }
    const View = () =>{
        setView(true)
    }
        return (

            <div className="heading">
                <Navbar/>
                <span></span>

               {view1 && <div className="create">
                <label>Choose Region</label>
                   <select id="region"  onChange={e=>{setRegion(e.target.value)}} >
                        <option value="">Any</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Tanta">Tanta</option>
                        <option value="Portsaid">Portsaid</option>
                        <option value="Giza">Giza</option>

                    </select>
                    <button onClick={Submit}> View available cars</button>
                </div>}
                {view && <div>
                    <BlogList blogs={cars} title="All Blogs"/>

                </div>}
            </div>
        );


}

export default Service;