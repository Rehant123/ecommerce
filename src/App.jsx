
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Admin/Dashboard/dashboard'
import Cart from './Pages/Cart/Cart'
import Order from './Pages/Orders/Order'
import Nopage from './Pages/Nopage/Nopage'
import MyState from './Contexts/myState'
import "./index.css"
import Login from './Pages/Registeration/Login'
import Signup from './Pages/Registeration/Signup'
import ProductInfo from './Pages/ProductInfo/ProductInfo'
import AddProduct from './Pages/Admin/Pages/AddProduct'
import UpdateProduct from './Pages/Admin/Pages/UpdateProduct'
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
function App() {

  return(
    <MyState>
  
    <BrowserRouter>
    <Routes>
      <Route element = {<Home/>} path = "/"></Route>
      <Route element = {
      <ProtectedRoutesForAdmin>
      <Dashboard/>
      </ProtectedRoutesForAdmin>
      } path = "/dashboard"></Route>
      <Route element = {<Cart/>} path = "/cart"></Route>
      <Route element = {
      <ProtectedRoutes>
      <Order/>
      </ProtectedRoutes>
      } path = "/order">

      </Route>
      <Route element = {<Nopage/>} path = "/nopage"></Route>
      <Route element = {<Login/>} path = "/login"></Route>
      <Route element = {<Signup/>} path = "/signup"></Route>
      <Route element = {<ProductInfo/>} path = "/productinfo/:id"></Route>
     
      <Route element = {<Cart/>} path = "/cart"></Route>
      <Route element = {<AddProduct/>} path = "/addproduct"></Route>
      <Route element = {<UpdateProduct/>} path = "/updateproduct"></Route>
   
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </MyState>
  )
 
}
export default App


//order sirf user hi dekh skta hn
//children me mera navbar order aega
export const ProtectedRoutes = ({children})=>{
  const user = JSON.stringify(localStorage.getItem('user'));
  if(user){
    return children
  }
  else{
    return <Navigate to = {"/login"}/>
  }
}



//admin
export const ProtectedRoutesForAdmin =({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'));
  if(admin.user.email === "rehantthapa@gmail.com"){
    return children
  }
  return <Navigate to  = {"/login"}/>
}

