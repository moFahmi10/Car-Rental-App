import * as React from 'react';
import AdminNav from './AdminNav';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const Report = () => {
 
  const history = useHistory();
  var result = sessionStorage.getItem("blogs")
    var blogs =  {  result: [] };

  const submit=()=>{
    history.push("/preRep")
  }
   return ( 
         <div className="report">   
         <AdminNav/>    
         
      <table>
        <tr>
          <th>Report1</th>
          <th>Report2</th>
          <th>Report3</th>
        </tr>
          {blogs.map(blog => (
              <tr>
                  <td>{blog.email}</td>
                  <td>{blog}</td>
                  <td>Male</td>
              </tr>
          ))
          }
      </table>
      <br></br>
      <button onClick={submit}>Go Back</button>
        </div>
 );

          }
export default Report;