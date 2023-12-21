import React from 'react'
import { useState } from 'react'
const Form = (props) => {
const [firstname , setfirstName] = useState("");
const [lastname , setLastName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [confirmpassword , setConfirmPassword] = useState("");


const [firstnameError, setFirstnameError] = useState("");
const [lastnameError, setLastnameError] = useState("");
const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
const [confirmpasswordError, setConfirmpasswordError] = useState("");

//TODO inputs state in one obj
//TODO error state in one obj


const validateFirstname = (input) => {
    setfirstName(input)
    console.log(input)
    if (input === ""){
        setFirstnameError("");
    }else {
        if (input.length <2) {
            setFirstnameError("First Name must be at least 2 characters");
        } else {
            setFirstnameError("");
        }
    }
};

const validateLastname = (input) => {
    setLastName(input)
    if (input === ""){
        setLastnameError("")
    }else {
        if (input.length < 2) {
            setLastnameError("Last Name must be at least 2 characters");
        } else {
            setLastnameError("");
        }
    }
};

const validateEmail = (input) => {
    setEmail(input)
    if (input === ""){
        setEmailError("")
    }else {
        if (email.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }
};

const validatePassword = (input) => {
    setPassword(input)
    if (input === ""){
        setPasswordError ("")
    }else {
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    };
    }

const validateConfirmpassword =  (input) => {
    console.log(password+"*"+confirmpassword);
    setConfirmPassword(input)
        if (password !== input) {
            setConfirmpasswordError("Passwords do not match");
        } else {
            setConfirmpasswordError("");
        }
};


const userCreat = (e) => {
    e.preventDefault();
    const newUser = { firstname,lastname, email, password,confirmpassword };
    console.log("Welcome", newUser);
    setfirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
};

    return (
    <div>
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={userCreat}>
                <fieldset>
                    <legend>First Name</legend>
                <div>
                <label></label>
                <input type="text" placeholder='First Name' onChange={(e)=>{validateFirstname(e.target.value);}} value={firstname} />
                <br />
                <span className='ERROR'>{firstnameError}</span>
                </div>
                </fieldset>
                <fieldset>
                    <legend>Last Name</legend>
                <div>
                <label></label>
                <input type="text"placeholder='Last Name' onChange={(e)=> {validateLastname(e.target.value);}} value={lastname} />
                <br />
                <span className='ERROR'>{lastnameError}</span>
                </div>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                <div>
                <label></label>
                <input type="email"placeholder='Email' onChange={(e)=> {validateEmail(e.target.value);}}value={email} />
                <br />
                <span className='ERROR'>{emailError}</span>
                </div>
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                <div>
                <label></label>
                <input type="Password"placeholder='Password' onChange={(e)=>{validatePassword(e.target.value);}}value={password} />
                <br />
                <span className='ERROR'>{passwordError}</span>
                </div>
                </fieldset>
                <fieldset>
                    <legend>Confirm Password</legend>
                <div>
                <label></label>
                <input type="password"placeholder='Confirm Password' onChange={(e)=> {setConfirmPassword(e.target.value); validateConfirmpassword(e.target.value);}}value={confirmpassword} />
                <br />
                <span className='ERROR'>{confirmpasswordError}</span>
                </div>
                </fieldset>
                <br />
                <button type='submit' value={"Create User"}>
                    Submit
                </button>
            </form>
            <br />
            <fieldset>
                <legend>Your Form Data</legend>
            <p>First Name : {firstname}</p>
            <p>Last Name : {lastname}</p>
            <p>Email : {email}</p>
            <p>Password</p>
            <p>Confirm Password</p>
            </fieldset>
        </fieldset>
    </div>
  )
}

export default Form ;