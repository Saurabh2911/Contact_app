import React , { useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const AddContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts= useSelector((state)=>state);
 const dispatch = useDispatch();

   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactNumberExists = contacts.filter((contact) =>
    contact.number === parseInt(number) ? contact : null
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
      id:  contacts[contacts.length - 1].id + 1 ,
      email,
      name,
      number,
    };

    dispatch({type:"ADD_CONTACT", payload:data});
    toast.success("Contact added successfully!!");
    history.push("/");
  };
  
   
    return (
        <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
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
                  placeholder="Phone Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-block btn-dark m-2"
                  type="submit"
                  value="Add Contact"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}

export default AddContact;
