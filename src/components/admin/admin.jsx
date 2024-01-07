import { Link } from "react-router-dom";


const Admin = () => {
    return(
        <>
            <div className="admin_box">
                <Link className="admin_box_btn1" to='/admin/category'><button className="admin_box_btn1">+ Add category</button></Link>
                <Link className="admin_box_btn2" to='/admin/car'> <button className="admin_box_btn2">+ Add car</button></Link>
            </div>
        </>
    )
}
 
export default Admin;