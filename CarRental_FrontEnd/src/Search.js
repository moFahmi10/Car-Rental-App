import Car from "./car";
import Homenav from "./HomeNav";
import Navbar from "./Navbar";

import * as React from "react";
import axios from "axios";
import {useState} from "react";
import BlogList from "./BlogList";

const Search = () => {
    

    const [selected, setSelected] = React.useState("");
    const [params,setParams] = useState(""+","+""+","+""+","+""+","+"");
    const [brand,setBrand] = useState("");
    const [model,setModel] = useState("");
    const [color,setColor] = useState("");
    const [year,setYear] = useState("");
    const [cars,setCars] = useState(null);
    const[view,setView] = useState(false);
    const[search,setSearch] = useState(true);
    const[view1,setView1]=useState(true);
    const[view2,setView2]=useState(true);
    const[region,setRegion] = useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };
      
      const hyundai = ["Any","Elantra", "Tucson", "i10"];
      const ford = ["Any","Focus", "Fusion", "C-Max"];
      const Nissan = ["Any","Sunny", "Sentra", "Qashqai"];
      const Kia = ["Any","Rio", "Cerato", "Sportage"];
      const Toyota = ["Any","Yaris", "Corolla", "Fortuner"];
      const Mercedes = ["Any","C180", "E180", "CLA","GLC200"];
      const Opel = ["Any","Astra", "Crossland", "GrandLand","Corsa"];
      const Audi = ["Any","A3", "A5", "Q3"];
      const Chevrolet = ["Any","Aveo", "Optra", "Captiva"];
      const Mitsubishi = ["Any","Lancer", "Expander", "Eclipse"];
      const MG = ["Any","MG6", "MG5", "ZS","RX5"];
      const BMW = ["Any","320i","520i", "X3","X5", "X6"];
      const Peugot = ["Any","301", "508", "2008"];
      const Jeep = ["Any","Wrangler", "Renegade", "Grand Cherokee"];
      const Renault = ["Any","Megane", "Duster", "Kadjar"];  
      const Skoda = ["Any","Octavia", "Kodiaq", "Karoq"];
      const Volkswagen = ["Any","Golf", "Passat", "Tiguan"];
      const Fiat = ["Any","Tipo", "500X"];
      let type=null;
      let options = "Any";
      if (selected === "Hyundai") {
        type = hyundai;
      } else if (selected === "Ford") {
        type = ford;
      } else if (selected === "Nissan") {
        type = Nissan;
      }
      else if (selected === "Kia") {
        type = Kia;
      } else if (selected === "Toyota") {
        type = Toyota;
      }
      else if (selected === "Mercedes") {
        type = Mercedes;
      }
      else if (selected === "Opel") {
        type = Opel;
      }
      else if (selected === "Audi") {
        type = Audi;
      }
      else if (selected === "Chevrolet") {
        type = Chevrolet;
      }
      else if (selected === "Mitsubishi") {
        type = Mitsubishi;
      }
      else if (selected === "MG") {
        type = MG;
      }
      else if (selected === "BMW") {
        type = BMW;
      }
      else if (selected === "Peugot") {
        type = Peugot;
      }
      else if (selected === "Jeep") {
        type = Jeep;
      }
      else if (selected === "Renault") {
        type = Renault;
      }
      else if (selected === "Skoda") {
        type = Skoda;
      }
      else if (selected === "Volkswagen") {
        type = Volkswagen;
      }
      else if (selected === "Fiat") {
        type = Fiat;
      }
      

      if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
      }
    const filter = async (e) => {
      setView2(false);
          e.preventDefault()
            setSearch(true);
        let response = axios.get('http://localhost:8080/api/v1/car/search/'+ params)
        let data = (await response).data

        setCars(data)
        setView(true)
    }
      const goBack = (e)=>{
        setView2(true);
        setSearch(true)
          setView(false)
          setModel("")
          setBrand("")
          setColor("")
          setYear("")
          setParams(""+","+""+","+""+","+"")
          type = null;
          options = "Any";
          changeSelectOptionHandler(e)
      }
      const onSubmit=()=>{
        setView1(true);
        
      }
    return (
        <div className="default">
            <Navbar/>
           {/* {view2 && <div className="region">
            <label>Choose Region</label>
                    <select id="region"  >
                        <option value="">Any</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Tanta">Tanta</option>
                        <option value="Portsaid">Portsaid</option>
                        <option value="Giza">Giza</option>

                    </select>
                    <button onClick={onSubmit}>Select</button>
                    </div>} */}
                    {search && <form>
       {view2 && <div className="search">
            <h1>Choose your options</h1>
            <label>Brand</label>
            <select  id="selected"   onChange={e => { changeSelectOptionHandler(e); setBrand(e.target.value); setParams(e.target.value +","+""+","+""+","+""+","+"") }}>
                <option value="">Any</option>
                <option  value="Hyundai">Hyundai</option>
                <option  value="Ford">Ford</option>
                <option  value="Nissan">Nissan</option>
                <option  value="Kia">Kia</option>
                <option  value="Toyota">Toyota</option>
                <option  value="Mercedes">Mercedes</option>
                <option  value="Opel">Opel</option>
                <option  value="Audi">Audi</option>
                <option  value="Chevrolet">Chevrolet</option>
                <option  value="Mitsubishi">Mitsubishi</option>
                <option  value="BMW">BMW</option>
                <option  value="MG">MG</option>
                <option  value="Peugot">Peugot</option>
                <option  value="Jeep">Jeep</option>
                <option  value="Renault">Renault</option>
                <option  value="Skoda">Skoda</option>
                <option  value="Volkswagen">Volkswagen</option>
                <option  value="Fiat">Fiat</option>
            </select>
            <label>Model</label>
            <select onChange={e=>{setParams(brand +","+e.target.value+","+""+","+""+","+"")}} id="model" >
            {
              
                options
            }

            </select>

            <label>Color</label>
            <select onChange={e=> {setColor(e.target.value); setParams(brand +","+model+","+""+","+e.target.value+","+"")}}>
                <option value="">Any</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
                <option value="Yellow">Yellow</option>

            </select>
            <label>Choose Region</label>
                    <select id="region"  onChange={e=>{setRegion(e.target.value); setParams(brand +","+model+","+e.target.value+","+color+","+"") }} >
                        <option value="">Any</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Tanta">Tanta</option>
                        <option value="Portsaid">Portsaid</option>
                        <option value="Giza">Giza</option>

                    </select>
            

            <label>Year</label>
            <select onChange={e=>  setParams(brand +","+model+","+region+","+color+","+e.target.value)  }>
                <option value="">Any</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                </select>

            <button onClick={filter} >Search </button>
            
        </div>}
        </form>}


                {view && <div>
                    <BlogList blogs={cars} title="All Blogs"/>
                    <button className="Rent"  onClick={e=>{goBack(e)}}>Go Back </button>
                    <br/>
                </div>}
            </div>
    );
}
 
export default Search;