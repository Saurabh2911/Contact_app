import { Link ,useParams } from "react-router-dom";
import React , { useEffect, useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const EditContact = () => {
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

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const checkContactEmailExists = contacts.filter((contact) =>
        contact.email === email && contact.id !== parseInt(id) ? contact : null
      );
      const checkContactNumberExists = contacts.filter((contact) =>
      contact.number === parseInt(number) && contact.id !== parseInt(id) ? contact : null
    );
  
      if (!email || !name || !number) {
        return toast.warning("Please fill in all fields!!");
      }
      if (checkContactEmailExists.length > 0) {
        return toast.error("This email already exists!!");
      }
      if (checkContactNumberExists.length>0) {
        return toast.error("This phone number already exists!!");
      }
  
      const data = {
        id:  parseInt(id) ,
        email,
        name,
        number,
      };
  
      dispatch({type:"UPDATE_CONTACT", payload:data});
      toast.success("Contact Updated successfully!!");
      history.push("/");
    };


    return (
        <div className="container-fluid">
          {currentContact ? (
            <>
             <h1 className="text-center text-dark py-3 display-2">Edit Contact {id }</h1>
             <div className="row">
               <div className="col-md-6 p-5 mx-auto shadow">
                 <form onSubmit={handleSubmit}>
                   <div className="form-group">
                     <input
                       className="form-control"
                       type="text"
                       placeholder="Full name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                     />
                   </div>
                   <div className="form-group">
                     <input
                       className="form-control"
                       type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                   </div>
                   <div className="form-group">
                     <input
                       className="form-control"
                       type="number"
                       placeholder="Phone"
                       value={number}
                       onChange={(e) => setNumber(e.target.value)}
                     />
                   </div>
                   <div className="form-group d-flex align-items-center justify-content-between my-2">
                     <button type="submit" className="btn btn-primary">
                       Update Contact
                     </button>
                     <Link to={"/"} 
                     className="btn btn-danger ml-3">
                      Cancel
                    </Link>
                   </div>
                 </form>
               </div>
             </div>
             </>
          ):(
            <h1 className="text-center text-dark py-3 display-2"> Contact with Id {id } not exist</h1>
          )}
       
      </div>
    )
}

export default EditContact;
