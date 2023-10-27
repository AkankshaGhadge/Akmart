import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './website/layout/Master';
import Index from './website/maincomponant/Index';
import Category from './website/maincomponant/Category';
import Product from './website/maincomponant/Product';
import Login from './website/Authantication/Login';
import Rajister from './website/Authantication/Rajister';
import About from './website/maincomponant/About';
import Brand from './website/maincomponant/Brand';
import SubCatagory from './website/maincomponant/SubCatagory';
import Banking from './website/maincomponant/Banking';
import SubBrand from './website/maincomponant/SubBrand';
import Shop from './website/maincomponant/Shop';
import Search from './website/maincomponant/Search';
import ViewCart from './website/maincomponant/ViewCart';
import Wishlist from './website/maincomponant/Wishlist';
import Checkout from './website/maincomponant/Checkout';
import Profile from './website/Authantication/Profile';
import Myorder from './website/maincomponant/Myorder';

function App() {
  return (
    <div>
     
     
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Master Rcf={Index}/>}/>
        <Route path='/product-shop/:brand_id'element={<Master Rcf={SubBrand}/>}/>
        <Route path='/product-shop/:cat_id/:sub_id'element={<Master Rcf={SubCatagory}/>}/>
        <Route path='/index'element={<Index/>}/>
        <Route path='/categories' element={ <Master Rcf={Category}/>}></Route>
        <Route path='/product' element={<Master Rcf={Product}/>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/ragister'element={<Rajister/>}/>
        <Route path='/about'element={<Master Rcf={About}/>}/>
        <Route path='/brand'element={<Master Rcf={Brand}/>}/>
        <Route path='/banking' element={<Master Rcf={Banking}/>}/>
        <Route path='/shop'element={<Master Rcf={Shop}/>}/>
        <Route path='/search'element={<Master Rcf={Search}/>}/>
        <Route path='/viewcart'element={<Master Rcf={ViewCart}/>}/>
        <Route path='/wishlist'element={<Master Rcf={Wishlist}/>}/>
        <Route path='/checkout'element={<Master Rcf={Checkout}/>}/>
        <Route path='/Profile'element={<Master Rcf={Profile}/>}/>
        <Route path='/myorder'element={<Master Rcf={Myorder}/>}/>


      </Routes> 
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
