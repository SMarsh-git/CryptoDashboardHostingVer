import { useState } from "react";
import { signUp } from "./signUp";
import "../components/styles/UserForm.css";
import Logo from "../components/images/Logo.jpg"

export const UserForm = ({ setUser }) => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    signUp(username, email, password, setUser);
  };

    return (
        <div className="LoginPage">
          <div className="left-div">
          <img className="LoginLogo" src={Logo} alt="Logo" />
          </div>
          
          <div className="LoginBox">
          <p className="LoginText">Login to view charts</p>
            <form onSubmit = {submitHandler}>
                <input className="LoginBoxes" onChange = {(e) => setUserName(e.target.value)}
                placeholder = "Username" />
                <input className="LoginBoxes" onChange = {(e) => setEmail(e.target.value)}
                placeholder = "Email" />
                <input className="LoginBoxes" onChange = {(e) => setPassword(e.target.value)}
                placeholder = "Password"
                type = {show ? "text" : "password"}
                onMouseOver = {() => setShow (!show)}
                onMouseOut = {() => setShow (!show)}/>
                <button className="SubmitBtn" type="submit">Submit</button>
            </form>
        </div>
      </div>
    )
}