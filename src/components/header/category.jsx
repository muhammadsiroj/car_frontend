import { useState,useEffect} from 'react'
import {Link } from "react-router-dom";

const Category = () => {
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
            <Link to={`/cars/${c.id}`} >
                    <span key={c.id}
                     className='box_span'>
                        <img className='box_span_img' src={'http://localhost:4000/' + c.img} alt="" />
                        <h1   className='box_span_h1'>{c.title}</h1>
                    </span>  </Link>
                    
           
            </>
        )
    })
    return (
        <>
        <h1 className='home_h1' >Modellari</h1>
        <div className="box">
            {category}
        </div>
        </>
    );
}

export default Category;