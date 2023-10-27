import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import Authuser from '../Authantication/Authuser';


const SubCatagory = () => {
  const { http, token } = Authuser();

  let { cat_id, sub_id } = useParams();
  // for product
  const [Category, setCategory] = useState([]);
  //for banner
  const [category_, setCategory_] = useState([]);
  //for subbanner
  const [subcategory_, subCategory_] = useState([]);
  // scroll menu
  const [Cat, setCate] = useState([]);
  const [brand, setbrand] = useState([]);
  //Slider after banner
  const [Sub, setSub] = useState([]);
  //count for brand and categoryies
  const [Count, setCount] = useState([]);
  const [Count1, setCount1] = useState([]);
  console.log(Count1);

  const getCategoryData = () => {
    // console.log();
    try {
      fetch(`https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setCategory(data.category.data);
          setCategory_(data.category_);
          subCategory_(data.subcategory_);
          setCate(data.cat);
          setbrand(data.brand);
          setSub(data.sub);
          setCount(data.count);
          setCount1(data.count1);
        })

        .catch((error) => {
          console.error("Error fetching data:", error);
        });

    } catch (error) {

    }


  }
  useEffect(() => {
    getCategoryData();
  }, [cat_id, sub_id]);


  const addTocart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error adding product to cart', error);
        });


}
const addToWish = (product_id) => {
  http.get(`/add-to-wishlist/${product_id}`)
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.error('Error adding product to cart', error);
      });


}


  return (
    <div>
      {/* <Header /> */}
      <div style={{ background: `url(https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg)`, backgroundSize: 'cover', height: '475px' }}>
        <div className='heading '>

          <div className="container" style={{ paddingBottom: "150px", color: "" }}>
          <h2 style={{ color: "white"}}>{category_.category_name}</h2>
            <h4 style={{ color: "white"}} >
              <Link to="/" style={{ color: "white" }}><i className="ion-ios-home" />Home/</Link>
             {subcategory_.subcategory_name} 
            </h4>
          </div>

        </div>
      </div>
      <section className="ftco-section ftco-category ftco-no-pt">
        <div className="container">
          <Carousel>
            {/* Group categories in rows of 3 */}
            {Sub.map((Cate, index) => {
              if (index % 3 === 0) {
                const categorySlice = Sub.slice(index, index + 3);
                return (
                  <Carousel.Item key={index}>
                    <div className="row">
                      {categorySlice.map((category, subIndex) => (
                        <div className="col-md-4" key={subIndex}>
                          <div className="category-wrap  img mb-4 d-flex align-items-end" >
                            <img className='img' src={category.subcategory_image} alt={category.subcategory_name} srcset="" />
                            <div className="text px-3 py-1">
                              <h2 className="mb-0"><a href="#">{category.subcategory_name}</a></h2>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                );
              } else {
                return null; // If not the start of a new row, return null (no carousel item)
              }
            })}
          </Carousel>

        </div>
      </section>
      <div class="container ">
        <div class="row">
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
              <form>
                <ul class="shop-widget-list shop-widget-scroll">
                  {brand.map((Brand) => (
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                      <input type="checkbox" className="custom-control-input" defaultChecked id="price-all" />
                      <label className="custom-control-label" htmlFor="price-all">{Brand.brand_name} </label>

                    </div>
                  ))}
                </ul>
              </form>
            </div>
          </div>
          <div class="col-lg-9">
            <div className="container">
              <div className="row">
                {
                  Category.map((products) =>
                  (
                    <div className='col-lg-3'>
                    
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
                              {token ? (<a className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-cart" onClick={() => addTocart(products.product_id)}>
                                                    {/* <span><i className= /></span> */}

                                                </a>) : <Link to={'/login'} />

                                                }
                                              {token ? (<a className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-heart" onClick={() => addToWish(products.product_id)}>
                                                    {/* <span><i className= /></span> */}

                                                </a>) : <Link to={'/login'} />

                                                }
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubCatagory