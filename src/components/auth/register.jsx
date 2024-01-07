import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const RegistrationForm = () => {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status == 201) {
        const token =  response.json()
        handleLoginSuccess(await token);
          navigate('/home');
        } else {
        toast.error('error')
      }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  return (
    <>
    <div className="register">
    <form onSubmit={handleSubmit}>
        <div className="register_box">
        <h1 className='register_h1'>register</h1>
      <input
      placeholder='username'
      className='register_inp'
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required/>

      <input
      placeholder='password'
      className='register_inp'
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
        />

      <button className='register_btn' type="submit">Register</button>
      <Link className="register_login" to={'/login'}>login</Link>
        </div>
    </form>
    <div/>
    <div/>
    <ToastContainer/>
    </div>
    </>
  );
};

export default RegistrationForm;
