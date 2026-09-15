import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
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
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminProductForm from './pages/admin/AdminProductForm';
import AdminOrders from './pages/admin/AdminOrders';
import AdminDeliveryPartners from './pages/admin/AdminDeliveryPartners';
import DeliveryLogin from './pages/delivery/DeliveryLogin';
import DeliveryLayout from './pages/delivery/DeliveryLayout';
import DeliveryDashboard from './pages/delivery/DeliveryDashboard';

const App = () => {
  return (
    <>
      <Toaster 
        position='top-right' 
        toastOptions={{
          duration: 3000, 
          style: { background: '#B30022', borderRadius: '12px', fontSize: '14px' }
        }}
      />
      <Routes>
        {/* Public - No navbar/footer */}
        <Route path='/login' element={<Login />} />

        {/* Main Application Layout */}
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<ProductPage />} />
          <Route path='search' element={<SearchResults />} />
          <Route path='deals' element={<FlashDeals />} />

          {/* Protected Customer Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path='checkout' element={<CheckOut />} />
            <Route path='orders' element={<MyOders />} />
            <Route path='order/:id' element={<OderTracking />} />
            <Route path='addresses' element={<Addresses />} />
          </Route>
        </Route>

         {/* Admin Routes (Relative paths without leading slashes) */}
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path='products' element={<AdminProducts />} />
            <Route path='products/new' element={<AdminProductForm />} />
            <Route path='products/:id/edit' element={<AdminProductForm />} />
            <Route path='orders' element={<AdminOrders />} />
            <Route path='delivery-partners' element={<AdminDeliveryPartners />} />
          </Route>

          {/* Delivery Routes */}
          <Route path='delivery/login' element={<DeliveryLogin />} />
          <Route path='delivery' element={<DeliveryLayout />}>
            <Route index element={<DeliveryDashboard />} />
          </Route>
      </Routes>
    </>
  );
};

export default App;