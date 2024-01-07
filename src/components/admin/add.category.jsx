import React, { useState } from 'react';
import AdminNavbar from '../navbar/admin.navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', image);
    formData.append('title', title);
    fetch('http://localhost:4000/category', {
      method: 'POST',
      headers:{
        'authorization': `${localStorage.getItem('token')}`,
      },
      body: formData,
    })
      .then( res =>{
        res.json()
        if(res.status == 201){
         toast.success('success')
         
        }
        else{
          toast.error(res.statusText)
          
        }
      })
      .catch(error =>  console.error('Error:', error));

    };

  return (
    <>
    <AdminNavbar/>
    <form onSubmit={handleSubmit}>
    <div className="admin_box">
      <div>
        <label htmlFor="titleInput"></label>
        <input placeholder='category name' className='input-text' type="text" id="titleInput" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="fileInput"></label>
        <input className='input-upload' type="file" id="fileInput" onChange={handleImageChange} />
      </div>
      <button className='btn' type="submit">Upload</button>
      </div>
    </form>
    <ToastContainer/>

    </>
  );
};

export default AddCategory;
 