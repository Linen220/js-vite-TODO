// import { useForm } from "../hooks/useForm"
import { Form } from "react-router-dom";
import React from 'react';
import './Login.css';

export default function Login() {
  // const { formData, handleInputChange } = useForm({ username: '', password: '' });

  const handleForm = (e) => {
    e.preventDefault();
    // console.dir(formData)
  };

  return (
    <div className="login-main">
      <div className="App">
        <h1>Login</h1>
        {/* <Form method="post" onSubmit={handleForm} action="login"> */}
        <Form method="post" action="actionLogin">
          <div className="form-control">
            <label>Username</label>
            {/* <input type="text" name="username" onChange={handleInputChange} /> */}
            <input type="text" name="username" />
          </div>
          <div className="form-control">
            <label>Password</label>
            {/* <input type="password" name="password" onChange={handleInputChange} /> */}
            <input type="password" name="password" />
          </div>
          <div className="form-control">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </div>
    </div>
  )
}