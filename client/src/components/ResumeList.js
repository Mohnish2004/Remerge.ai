import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router";
 
const Resume = (props) => (
 <tr>
   <td>{props.resume.name}</td>
   <td>{props.resume.directory}</td>
   <td>{props.resume.content}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.resume.userid}`} >Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.resume._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function ResumeList() {
  const [user, setUser] = useState({
    name: "",
    position: "",
    level: "",
    records: [],
  });
 const [resumes, setResumes] = useState([]);
 const params = useParams();
 const id = params.id.toString();

 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getResumes() {
    
    async function fetchname() {
      const response = await fetch(`http://localhost:5050/record/${id}`);
    
      if (!response.ok) {
        const message = `An error has occurred lol: ${response.statusText}`;
        window.alert(message);
        return;}
        
      const record = await response.json();
      setUser(record);
      console.log("hello")
    }
    fetchname();
    
     const response = await fetch(`http://localhost:5050/specuser/${id}`, {method: "GET"});
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
     const resumes = await response.json();
     setResumes(resumes);
   }
 
   getResumes();
 
   return;
 }, [resumes.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5050/specuser/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = resumes.filter((el) => el._id !== id);
   setResumes(newRecords);
 }
 
 // This method will map out the records on the table
 function resumeList() {
   return resumes.map((resume) => {
     return (
       <Resume
         resume={resume}
         deleteRecord={() => deleteRecord(resume._id)}
         key={resume._id}
       />
     );
   });
 }


 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Resume list for {user.name}</h3>
     <Link className="btn btn-link" to={`create`} >create brand new resume</Link>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Directory</th>
           <th>Content</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{resumeList()}</tbody>
     </table>
   </div>
 );
}