import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import { Link, useParams } from "react-router-dom";
import user from '../../images/user.png'

const Cars = () => {
    let id = useParams().id
    const [data,setData] = useState([]);
    let card;
    let cate = `http://localhost:4000/cars/${id}`;
    
    useEffect(()=>{
        (async()=>{
            let data = await fetch(cate).then(res=>res.json());
            
            setData(data.data)
        })()
    },[])


    card = data.map(c=>{
        return(
            <>
                <Link  to={`car/${c.id}`}>
                    <span className="span_box">
                        <img className="span_box_img" src={'http://localhost:4000/'+c.img} alt="" />
                        <h1 className="span_box_h1">{c.name}</h1>
                        <h2 className="span_box_h2">narxi: {c.price}</h2>
                    </span>
                </Link>
            </>
        )
    })

    return (
        <>
        <Navbar/>
        <div className="car_box">
        <h1 className="car_h1">Modellar turlari</h1>
        <button className="navbar_btn"><Link className="navbar_btn" to="/home"> Asosiyga qaytish</Link></button>
        </div>
        <div className="box">

        {card}
        </div>
        </>
    );
}
 
export default Cars;