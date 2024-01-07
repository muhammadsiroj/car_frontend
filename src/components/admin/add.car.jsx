import { useState,useEffect} from 'react'
import {Link } from "react-router-dom";
import AdminNavbar from '../navbar/admin.navbar';

const AddCarCategory = () => {
    let category;

    const [data,setData] = useState([]);
    let cate = `http://localhost:4000/category`;
    
    useEffect(()=>{
        (async()=>{
            let data = await fetch(cate).then(res=>res.json());
            
            setData(data.data)
        })()
    },[])
    category = data.map(c=>{
        return(
            <>
            <div className="add_car">
            <Link to={`/admin/car/${c.id}`} >
                    <span key={c.id}
                     className='admin_add_car'>
                        <img className='admin_add_car_img' src={'http://localhost:4000/' + c.img} alt="" />
                        <h1   className='admin_add_car_h1'>{c.title}</h1>
                    </span>  </Link>
            </div>
                    
           
            </>
        )
    })
    return (
        <>
        <AdminNavbar/>
        <div className="add_car_box">
            {category}
        </div>
        </>
    );
}

export default AddCarCategory;