import { Toaster } from 'react-hot-toast';
import {Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import SearchResults from './pages/SearchResults';
import FlashDeals from './pages/FlashDeals';
import CheckOut from './pages/Checkout';
import MyOders from './pages/MyOders';
import OderTracking from './pages/OderTracking';
import Addresses from './pages/Addresses';
import ProtectedRoute from './components/ProtectedRoute';


const App =()=>{

return (
<>
<Toaster  position='top-right' toastOptions={{duration:3000, style:{ background:'#B3022', borderRadius:'12px', fontSize:"14px"}}}/>
<Routes>
  {/* Login page - no navbar/footer  */}
<Route  path='/login' element={<Login/>}/>

{/* Main pages - Navbar/footer  */}
<Route path='/' element={<AppLayout/>}>
  <Route index element={<Home/>}/>
  <Route path='products' element={<Products/>}/>
  <Route path ='product/:id' element={<ProductPage/>}/>
  <Route path ='search' element={< SearchResults/>}/>
  <Route path ='deals' element={<  FlashDeals />}/>

  <Route  element={<ProtectedRoute />}>
    <Route  path='checkout' element={<CheckOut/>} />
    <Route  path='orders' element={<MyOders/>} />
    <Route  path='order/:id' element={<OderTracking/>} />
    <Route  path='addresses' element={<Addresses/>} />
  </Route>
   
</Route>
</Routes>
</>
)
}

export default App