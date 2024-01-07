import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminNavbar from '../navbar/admin.navbar';

const ProductForm = () => {
  const id = useParams().id
  const [formData, setFormData] = useState({
    img:null,
    img_in: null,
    img_out: null,
    name: '',
    price: '',
    position: '',
    marka: '',
    mator: '',
    color: '',
    distance: '',
    description: '',
    year: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

       fetch(`http://localhost:4000/cars/${id}`, {
        method: 'POST',
        headers:{
          'authorization': `${localStorage.getItem('token')}`,
        },
        body: formDataToSend,
      })
      .then(res=>{
        res.json()
        if(res.status == 201){
         toast.success('success');
        }
        else{
          toast.error(res.statusText)

        }
      })
  };

  return (
    <>
    <AdminNavbar/>
    <form onSubmit={handleSubmit}>
    <div className="addcar">
    <div className="addcar_box">
      <input className='addcar_inp_rasm' placeholder='img' type="file" name="img" onChange={handleImageChange} />
      <input className='addcar_inp_rasm' placeholder='img_in' type="file" name="img_in" onChange={handleImageChange} />
      <input className='addcar_inp_rasm' placeholder='img_out' type="file" name="img_out" onChange={handleImageChange} />
      <input className='register_inp' placeholder='name' type="text" name='name' onChange={handleInputChange} />
      <input className='register_inp' placeholder='price' type="text" name='price' onChange={handleInputChange} />
      <input className='register_inp' placeholder='position' type="text" name='position' onChange={handleInputChange} />
      <input className='register_inp' placeholder='marka' type="text" name='marka' onChange={handleInputChange} />
      <input className='register_inp' placeholder='mator' type="text" name='mator' onChange={handleInputChange} />
      <input className='register_inp' placeholder='color' type="text" name='color' onChange={handleInputChange} />
      <input className='register_inp' placeholder='distance' type="text" name='distance' onChange={handleInputChange} />
      <input className='register_inp' placeholder='description' type="text" name='description' onChange={handleInputChange} />
      <input className='register_inp' placeholder='year' type="text" name='year' onChange={handleInputChange} />
      <button className='register_btn' type="submit">Submit</button>
    </div>
    </div>
    </form>
    <ToastContainer/>
  </>
  );
};

export default ProductForm;
