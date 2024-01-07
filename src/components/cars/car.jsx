import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import user from '../../images/user.png'

const Car = () => {
    let id = useParams().id
    const [data,setData] = useState([]);
    let cate = `http://localhost:4000/car/${id}`;
    
    useEffect(()=>{
        (async()=>{
            let data = await fetch(cate).then(res=>res.json());
            
            setData(data.data)
        })()
    },[])

console.log(data.img_out);


    




    return (
        <>
        <Navbar/>
        <div className="car_box">
        <h1 className="">Modellari</h1>
        <button className="navbar_btn"><Link className="navbar_btn" to='/home'>Asosiyga qaytish</Link></button>
            
            </div>
            <div className="global_box">
                <div className="global_box_left">
                    <h1 className="box_left_name" >{data.name}</h1>
                    <h1 className="box_left_name">{data.price} so'm dan </h1>
                    <img className="box_left_img" src={'http://localhost:4000/' + data.img} alt="" />
                    <h1 className="box_left_name">marka: <span className="box_span_h1">{data.marka}</span> </h1>
                    <h1 className="box_left_name">mator: <span className="box_span_h1">{data.mator}</span></h1>
                    <h1 className="box_left_name">year:<span className="box_span_h1">{data.year}</span></h1>
                    <h1 className="box_left_name">color: <span className="box_span_h1">{data.color}</span></h1>
                    <h1 className="box_left_name">distance:<span className="box_span_h1">{data.distance} km</span></h1>
                    <h1 className="box_left_name">position: <span className="box_span_h1">{data.position}</span></h1>
                    <h1 className="box_left_name">description: <span className="box_span_h1">{data.description}</span></h1>
                </div>
                <div className="global_box_right">
                    <h1>{data.name}</h1>

                    <div className="slider">
                        <div className="images">
                            <input type="radio" name="slide" id="img1"/>
                            <input type="radio" name="slide" id="img2"/>

                            <img className="images_img1" src={'http://localhost:4000/'+data.img_out} alt="img1" />
                            <img className="images_img2" src={'http://localhost:4000/'+data.img_in} alt="img2" />
                        </div>
                        <div className="dots">
                            <label htmlFor="img1"></label>
                            <label htmlFor="img2"></label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Car;