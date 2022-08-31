import Homenav from "./HomeNav";
import Navbar from "./Navbar";
import React, {useState} from "react";
import AdminNav from "./AdminNav";
import {AiOutlineSearch} from "react-icons/ai";
import axios from "axios";
import CarList from "./CarList";


const Car = () => {

  const [status1,setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [view,setView] = useState(false);

  const[brand,setBrand] = useState("");
  const[model,setModel] = useState("");
  const[color,setColor] = useState("");
  const[year,setYear] = useState("");
  const[plate,setPlate] = useState("");
  const[region,setRegion] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");


  const [carStatus,setCarStatus] = useState("");

  const [params,setParams] = useState(""+","+""+","+""+","+""+","+"");
  const [objects,setObjects] = useState(null)

  const add = (e) => {
    e.preventDefault()
    var jsonData = {
      "manufacturer": brand,
      "model": model,
      "plate": plate,
      "year": year,
      "price": price,
      "image": image,
      "region": region,
      "car_status": "Active",
      "color":color
    }
    console.log(jsonData)
    fetch('http://localhost:8080/api/v1/car', {  // Enter your IP address here
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    })

    alert("Car added successfully")
    setStatus2(false)
  }

  const changeCarStatus = (e) => {
    e.preventDefault(e)
    axios.get('http://localhost:8080/api/v1/car/changeCarStatus/' + plate + "/" +carStatus)
    alert("Car Status Changed Successfully")
    setStatus3(false)

  }
  const Search = async (e) => {
    e.preventDefault(e)
    let response = axios.get('http://localhost:8080/api/v1/car/searchByAdmin/' + params)
    let data = (await response).data
    console.log(data)
    setObjects(data)
    setView(true)

  }

  const select1 = () => {
    setStatus1(true);
    setStatus2(false);
    setStatus3(false);
    setStatus4(false);
   
  }
  const select2 = () => {
    setStatus1(false);
    setStatus2(true);
    setStatus3(false);
    setStatus4(false);
   
  }
  const select3 = () => {
    setStatus1(false);
    setStatus2(false);
    setStatus3(true);
    setStatus4(false);
   
  }
  const select4 = () => {
    setStatus1(false);
    setStatus2(false);
    setStatus3(false);
    setStatus4(true);
   
  }



    const [selected, setSelected] = useState("");
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

    return (  

      

      
        <div className="car">
          <AdminNav />
          
          
          <button onClick={select1} >Search</button>
          <button onClick={select2} >Add</button>
          <button onClick={select3}>Edit</button>
          <button onClick={select4}>Delete</button>
          
          
          {status1 && <div className="search">
           <form id="searchForm" >
             <label>Search Form</label>
            <label>Brand</label>
             <select  id="selected" onChange={e=> {
               changeSelectOptionHandler(e)
               setBrand(e.target.value)
               setParams(e.target.value+","+""+","+""+","+""+","+"")
             }
             }>
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
             <select id="model" onChange={e=>{setModel(e.target.value); setParams(brand+","+e.target.value+","+""+","+""+","+"")}}>
            {
                options
            }
            </select>
                         
            <label>Car Plate</label>
             <input type="text"  onChange={e=>{setPlate(e.target.value); setParams(brand+","+model+","+e.target.value+","+""+","+"")}}/>

            <label>Color</label>
             <select  onChange={e=>{setColor(e.target.value); setParams(brand+","+model+","+plate+","+e.target.value+","+"")}} >
            <option value="">Any</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
                <option value="Yellow">Yellow</option>

            </select>
            <label>Choose Region</label>
                    <select id="region"  >
                        <option value="">Any</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Tanta">Tanta</option>
                        <option value="Portsaid">Portsaid</option>
                        <option value="Giza">Giza</option>

                    </select>

            <label>Year</label>
             <select onChange={e=>{setYear(e.target.value); setParams(brand+","+model+","+plate+","+color+","+e.target.value)}}>
                <option value="">Any</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                </select>

             <button className="submit"  onClick={e=>{Search(e)}} >Submit </button>
             {view && <div>
               <CarList blogs={objects} title="All Blogs"/>
             </div>}

            </form>

        </div> }

         {status2 &&<div className="add">
            <form id="addForm" >
            <label>Brand</label>
              <select id="selected" onChange={e=> { changeSelectOptionHandler(e); setBrand(e.target.value)}}>
            <option value="">Any</option>
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
              <select onChange={e=>{setModel(e.target.value)} } id="model" >
            {
                options
            }
             

            </select>
            <label>Car Plate</label>
              <input type="text"  onChange={e=>{setPlate(e.target.value)}}/>
            <label>Color</label>
              <select  onChange={e=>{setColor(e.target.value)}} >
                <option value="">Any</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
                <option value="Grey">Grey</option>
                <option value="Yellow">Yellow</option>

            </select>


            <label>Year</label>
              <select onChange={e=>{setYear(e.target.value)}}>
                <option value="">Any</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                </select>
                <label>Region</label>
              <select id="region"  onChange={e=>{setRegion(e.target.value)}} >
                    <option value="">Any</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Tanta">Tanta</option>
                        <option value="Portsaid">Portsaid</option>
                        <option value="Giza">Giza</option>

                    </select>
                <label>Price</label>
              <input type="number" onChange={e=>{setPrice(e.target.value)}} />

                <label>Image Url</label>
              <input id="link" type="text" onChange={e=>{setImage(e.target.value)}}/>

              <button onClick={add}>Add </button>
            </form>
            
        </div> }


        {status3 &&<div className="edit">
          <label>Car Plate</label>
          <input type="text" onChange={e=>{setPlate(e.target.value)}}/>
          <br/>
          <label>Select Car State</label>
          <select onChange={e=>{setCarStatus(e.target.value)}} >
          <option>Active</option>
          <option>InActive</option>
          </select>
          <button onClick={changeCarStatus}  >Edit</button>
        </div>}
        {status4 &&<div className="delete">
          <label>Car Plate</label>
          <input type="text"/>
          <button>Delete</button>
        </div>}
        </div>
        
        
    );
}
 
export default Car;