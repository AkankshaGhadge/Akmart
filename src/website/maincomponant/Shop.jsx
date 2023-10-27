import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Shop = () => {

  const [Cat, setCate] = useState([]);
  const [brand, setbrand] = useState([]);
 
  const getCategoryData = () => {
    // console.log();
    try {
      fetch(`https://vsmart.ajspire.com/api/categories`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
         
          setCate(data.categories);
          
        })



        .catch((error) => {
          console.error("Error fetching data:", error);
        });

    } catch (error) {

    }


  }
  const getBrandData =()=>{

  
    try {
      fetch(`https://vsmart.ajspire.com/api/brands`)
        .then((response) => response.json())
        .then((data) => {
          
      
          setbrand(data.brands);
          
        })
  
  
  
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  
    } catch (error) {
  
    }
  }
  
  
  
  const [Shop, SetShop] = useState([]);
  const Getshop = () => {
    fetch(' https://vsmart.ajspire.com/api/shop').then(
      response => {
        return response.json();
      }

    ).then(
      data => {
        SetShop(data.product.data);
      }
    )


  }
  useEffect(() => {
    Getshop();
    getCategoryData();
    getBrandData();

  }, []);
  return (
    <div>
      <div style={{ background: `url(https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg)`, backgroundSize: 'cover', height: '475px' }}>
        <div className='heading'>
          <h1 style={{ color: "white" }} >VIEW ALL PRODUCT</h1>
          <h4 style={{ color: "white" }}> <i className="ion-ios-home" /><Link className='text-center' style={{ color: "white" }} to='/index'> Home</Link> /  <Link to='/shop' style={{ color: "white" }}>View All Product</Link></h4>

        </div>
      </div>
      <div className='row'>
        <div class="col-lg-3">
          <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Category</h6>
            <form>
              <ul class="shop-widget-list shop-widget-scroll">
                {Cat.map((Cat) => (
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                    <label className="custom-control-label" htmlFor="price-all">{Cat.category_name} </label>

                  </div>
                ))}
              </ul>
            </form>
          </div>
          <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Brands</h6>
            <div>
              <ul class="shop-widget-list shop-widget-scroll">
                {brand.map((Brand) => (
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                    <label className="custom-control-label" htmlFor="price-all">{Brand.brand_name} </label>

                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
      <section className="ftco-section">
       
        <div className="container">
          <div className="row">
            {
              Shop.map((products) =>
              (



                <div className="col-md-6 col-lg-3  ">
                  <div className="product">
                    <a href="#" className="img-prod"><img className="img-fluid card" src={products.product_image} alt="Colorlib Template" />
                      <span className="status">&#8377;{products.mrp_price - products.sale_price} OFF</span>
                      <div className="overlay" />
                    </a>
                    <div className="text py-3 pb-4 px-3 text-center">
                      <h3><a href="#">{products.english_name}</a></h3>
                      <div className="d-flex">
                        <div className="pricing">
                          <p className="price"><span className="mr-2 price-dc">{products.mrp_price}</span><span className="price-sale">{products.sale_price}</span></p>
                        </div>
                      </div>
                      <div className="bottom-area d-flex px-3">
                        <div className="m-auto d-flex">
                          <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                            <span><i className="ion-ios-menu" /></span>
                          </a>
                          <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                            <span><i className="ion-ios-cart" /></span>
                          </a>
                          <a href="#" className="heart d-flex justify-content-center align-items-center ">
                            <span><i className="ion-ios-heart" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
              )
            }
          </div>
        </div>
      </section>
      </div>
      </div>
    </div>
  )
}

export default Shop