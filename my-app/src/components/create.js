import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
    email: "",
    password: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:4000/register/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ email: "",
   password: "" });
   navigate("/register");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div style={{ marginLeft: 20, marginRight: 20 }}>
     <h3 style={{ marginTop: 20 }}>Register Here</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="email" style={{ marginTop: 20 }}>Name</label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.Email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password" style={{ marginTop: 20 }}>Email</label>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.Password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="Submit"
           className="btn btn-primary"
           style={{ marginTop: 20 }}
         />
       </div>
     </form>
   </div>
 );
}