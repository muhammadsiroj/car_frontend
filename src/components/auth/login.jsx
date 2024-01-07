import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleLoginSuccess = (token) => {
    localStorage.setItem('token', token);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const token = response.json()
        handleLoginSuccess(await token)
        navigate('/home')
      } else {
        toast.error('error')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="register">
        <div className="register_box">
            <h1 className='register_h1'>Login</h1>
      <input
      placeholder='username'
      className='register_inp'
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />

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

      <button className='register_btn' type="submit">Login</button>
      <Link className="register_login" to={'/register'}>Register</Link>
        </div>
        </div>
        <ToastContainer/>
    </form>
  );
};

export default Login;
