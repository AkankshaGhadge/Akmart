import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Authuser from '../Authantication/Authuser';

const Search = () => {

  const {http ,token}=Authuser();
  const [product,setproduct]= useState([]);
  const location = useLocation();  
  const [SearchParam] = useSearchParams(location.search);
  const q = SearchParam.get('q');
   const filterdata =product.filter(record=>record.english_name.toLowerCase().includes(q.toLowerCase()));


   const getproduct =() =>{
     http.get("/products  ").then((response)=>{
      setproduct(response.data.products.data);
     }
     )
   }
   const addTocart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error adding product to cart', error);
        });


}
   useEffect(() => {

    getproduct();
   },[])

  return (
    <div>
<div className="product-area pt-60 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-product-tab">
                <ul className="nav li-product-menu">
                  <li><a className="active " data-toggle="tab" href="#li-new-product"><span >Featured</span></a></li>

                </ul>
              </div>
             
            </div>
          </div>
          <div className="tab-content">
            <div id="li-new-product" className="tab-pane active show" role="tabpanel">
              <div className="row">

                {filterdata.map((featured) =>
                (
                  <div className="col-md-6 col-lg-3  ">
                  <div className="product">
                      <a href="#" className="img-prod"><img className="img-fluid card" src={featured.product_image} alt="Colorlib Template" />
                          <span className="status">&#8377;{featured.mrp_price - featured.sale_price} OFF</span>
                          <div className="overlay" />
                      </a>
                      <div className="text py-3 pb-4 px-3 text-center">
                          <h3><a href="#">{featured.english_name}</a></h3>
                          <div className="d-flex">
                              <div className="pricing">
                                  <p className="price"><span className="mr-2 price-dc">{featured.mrp_price}</span><span className="price-sale">{featured.sale_price}</span></p>
                              </div>
                          </div>
                          <div className="bottom-area d-flex px-3">
                              <div className="m-auto d-flex">
                                  <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                      <span><i className="ion-ios-menu" /></span>
                                  </a>
                                  {token ? (<button className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-cart" onClick={() => addTocart(featured.product_id)}>
                                      {/* <span><i className= /></span> */}

                                  </button>) : <Link to={'/login'} />

                                  }


                                  <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                      <span><i className="ion-ios-heart" /></span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  )
}

export default Search 
