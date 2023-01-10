import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Register = (props) => (
 <tr>
    
   <td>{props.register.email}</td>
   <td>{props.register.password}</td>
   
   <td>
     <Link className="btn btn-link" to={`/register/edit/${props.register._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRegister(props.register._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RegisterList() {
 const [registers, setRegisters] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRegisters() {
     const response = await fetch(`http://localhost:4000/register/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const registers = await response.json();
     setRegisters(registers);
   }
 
   getRegisters();
 
   return;
 }, [registers.length]);
 
 // This method will delete a record
 async function deleteRegister(id) {
   await fetch(`http://localhost:4000/register/${id}`, {
     method: "DELETE"
   });
 
   const newRegisters = registers.filter((el) => el._id !== id);
   setRegisters(newRegisters);
 }
 
 // This method will map out the records on the table
 function registerList() {
   return registers.map((register) => {
     return (
       <Register
         register={register}
         deleteRegister={() => deleteRegister(register._id)}
         key={register._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 className="reglist" style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>Register List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th style={{ marginLeft: 20}} >Name</th>
           <th>Email</th>
          
         </tr>
       </thead>
       <tbody>{registerList()}</tbody>
     </table>
   </div>
 );
}