import {useHistory} from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

const Payment = () => {
    const history = useHistory();
    let email = sessionStorage.getItem("email")
    let plate = sessionStorage.getItem("plate")
    let region = sessionStorage.getItem("region")
    let price = sessionStorage.getItem("price")
    const select = () => {
        var option = document.getElementById("selected").value;
        if(option==='1')
        document.getElementById("2").style.display="block";
        if(option==='2')
        document.getElementById("2").style.display="none";

    }
    
  
    const onSubmit = async () => {

        var date1 = document.getElementById("date1").value;
        var date2 = document.getElementById("date2").value;
        var option = document.getElementById("selected").value;
        if(date1>date2){
            alert("Invalid date of return")
            return false;
        }

        if (date1 === "") {
            alert("Error")
            return false;
        }
        if (date2 === "") {
            alert("Error")
            return false;
        } else {


            //alert("Mabrook hagazt el 3rbya")
            //
            var date11 = new Date(date1)
            var date22 = new Date(date2)
            var days = (date22.getTime() - date11.getTime()) / (1000 * 60 * 60 * 24)
            console.log(days)
            var total_price = days * parseInt(price)
            var dateString1 = date11.toISOString().split("T")[0];
            var dateString2 = date22.toISOString().split("T")[0];

            let response = axios.get('http://localhost:8080/api/v1/reservation/getReservationByPlate/' + plate + '/' + dateString1 + '/' + dateString2)
            let data = (await response).data

            if (data) {
                    alert(data)
            } else {
                let paid
                console.log(option)
                if (option === "2")
                    paid = "false"
                else
                    paid = "true"

                var jsonData = {
                    "plate": plate,
                    "email": email,
                    "pickup_date": dateString1,
                    "return_date": dateString2,
                    "paid": paid,
                    "total_price": total_price
                }
                console.log(jsonData)
                fetch('http://localhost:8080/api/v1/reservation', {  // Enter your IP address here

                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
                })
                alert("Car reserved succesdfully \n Check profile for reservation information")
                history.push("./service")
            }
        }

    }
    
    return ( 
        <div className="payment">
            
            <form action="Service">
            <span>CheckOut</span>
            <h1>Easy & Safe</h1>
            <label>Amount: </label>
            <label>Choose Date of PickUp</label>
            <input id="date1" type="date" required />
            <label>Choose Date of Return</label>
            <input id="date2" type="date" required/>
            <label>Choose Your Payment Method</label>
            <select required id="selected" onClick={select} >
                 
                 
                 <option value="2">Cash</option>
                 <option value="1">Credit Card</option>

            </select>
            
            
            <p ></p>
           
            </form>

            <div className="creditcard" >
        <form id="2" hidden >
            <span>Credit Card Details</span>
            <label>Credit Card Number</label>
            <input type="number" required id="num" />
            
            <label>Card Holder Name</label>
            <input type="text" required/>
            <label>CVV</label>
            <input type="number" id="cvv" required
            />
            </form>
            <button onClick={onSubmit}>Confirm</button>
            
        </div>
            
        
           
            
            

        </div>
     );
}
 
export default Payment;