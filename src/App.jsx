import {Route,BrowserRouter, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Cars from './components/cars/cars'
import NotFound from './components/header/notfound'
import Car from './components/cars/car'
import AdminPage from './pages/admin'
import AddCar from './components/admin/add.car'
import AddCategory from './components/admin/add.category'
import 'react-toastify/dist/ReactToastify.css';
import CarAdd from './components/admin/car.add'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Auth from './pages/auth'

function App() {

  return (
    <>
    <div className="global">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Auth/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cars/:id' element={<Cars/>} />
            <Route path='/cars/:id/car/:id' element={<Car/>} />
            <Route path='/admin' element={<AdminPage/>} />
            <Route path='/admin/category' element={<AddCategory/>} />
            <Route path='/admin/car' element={<AddCar/>} />
            <Route path='/admin/car/:id' element={<CarAdd/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
        
        
      </div>
    </div>
    </>
  )
}

export default App
