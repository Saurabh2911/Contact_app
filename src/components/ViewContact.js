import { Link ,useParams } from "react-router-dom";
import React , { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ViewContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
  
      const {id } =useParams(); 
      const contacts= useSelector((state)=>state);
      const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
      );
  
      useEffect(()=>{
       if(currentContact)
       {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
       }
  
      },[currentContact]);
  
 
  
      return (
          <div className="container-fluid">
            {currentContact ? (
              <>
               <h1 className="text-center text-dark py-3 display-2">Contact Detail of ID {id }</h1>
               <div className="row">
                 <div className="col-md-6 p-5 mx-auto shadow">
                 <table className="table table-hover">
                  <tr>
                    <td>Name:-</td>
                    <td>{name}</td>
                   </tr>
                   <tr>
                    <td>Email:-</td>
                    <td>{email}</td>
                   </tr>
                   <tr>
                    <td>Phone Number:-</td>
                    <td>{number}</td>
                   </tr>
                   </table> 
                     <Link to={"/"} 
                     className="btn btn-primary ml-3">
                      Back
                    </Link>

                 </div>
               </div>
               </>
            ):(
              <h1 className="text-center text-dark py-3 display-2"> Contact with Id {id } not exist</h1>
            )}
         
        </div>
      )
}

export default ViewContact;
