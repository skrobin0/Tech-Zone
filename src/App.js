import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home-pages/Home/Home';
import ReviewManage from './Pages/Review-Manage/ReviewManage';
import Inventory from './Pages/Inventory/Inventory';
import ErrorPage from './Pages/Error-page/ErrorPage';
import Shop from './Pages/Shop/Shop';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/review-manage' element={<ReviewManage />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/*' element={<ErrorPage />} />
        
        
      </Routes>
      
    </div>
  );
}

export default App;
