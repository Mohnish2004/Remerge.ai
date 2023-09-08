import React, { useState } from "react";
import { useNavigate, useParams} from "react-router";
 
export default function CreateResume() {

 const params = useParams();
 const id = params.id.toString();
 const [form, setForm] = useState({
   userid: id,
   name: "",
   directory: "",
   content: "",
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
   const newResume = { ...form };
 
   await fetch(`http://localhost:5050/specuser/${id}`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newResume),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ userid: "", name: "", directory: "", content: "" });
   navigate(`/${id}/resumes`);
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Resume</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Directory</label>
         <input
           type="text"
           className="form-control"
           id="directory"
           value={form.directory}
           onChange={(e) => updateForm({ directory: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">content</label>
         <input
           type="text"
           className="form-control"
           id="content"
           value={form.content}
           onChange={(e) => updateForm({ content: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create Resume"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}