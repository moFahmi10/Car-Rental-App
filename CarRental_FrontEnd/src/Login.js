
const Login = () => {
    const submit = async() =>{
        const email = document.getElementById("email").value
        const psw = document.getElementById("psw").value
        let url = 'http://localhost:8080/api/v1/customer/' + email +'/'+psw
        let bool = await fetch(url)
        let response = await bool.json();

        if (response === false) {
            alert("Wrong email or password!")
            return false;
        }
        else{
            alert("el mfrod n5osh fel page")
        }
    }

  return (  
    <div className="Login">
    <form >
         <label>Email</label>
         <input
         type="email" id="email"
         required
         />
         <label>Password</label>
         <input
         type="password" id="psw"
         required
         />
         <label>Admin</label>
         <input type="checkbox"/>
         <button onClick={submit} className="button" >Sign In</button>
     </form>
 </div>
)
}
export default Login;