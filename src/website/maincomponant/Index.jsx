import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Featured from './Featured';
import { Button } from 'bootstrap';
import Authuser from '../Authantication/Authuser';

const Index = () => {


    const [Product, Setproduct] = useState([]);
    const [Slider, SetSlider] = useState([]);
    const [Categories, Setcategories] = useState([]);
    const [Brand, SetBrand] = useState([]);
    const [Cart,SetCart]= useState([]);
    const { http, token } = Authuser();


    const Getbrand = () => {
        fetch('https://vsmart.ajspire.com/api/brands').then(
            response => {
                return response.json();
            }

        ).then(
            data => {
                console.log(data.brands);
                SetBrand(data.brands)
            }
        )

    }

    const GetProduct = () => {
        fetch('https://vsmart.ajspire.com/api/products').then(
            response => {
                return response.json();
            }

        ).then(
            data => {
                Setproduct(data.products.data);
            }
        )


    }
    const GetSlider = () => {
        fetch('https://vsmart.ajspire.com/api/banners').then(
            response => {
                return response.json();
            }

        ).then(
            data => {
                console.log(data);
                SetSlider(data.banners);
            }
        )
    }
    const Getcategories = () => {
        fetch('https://vsmart.ajspire.com/api/categories').then(
            response => {
                return response.json();
            }

        ).then(
            data => {
                console.log(data);
                Setcategories(data.categories);
            }
        )
    }
    useEffect(() => {
        GetProduct();
        GetSlider();
        Getcategories();
        Getbrand();
    }, []);
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
            <Link to='/index'></Link>
            <Carousel>
                {
                    Slider.map((slider) =>
                    (
                        <Carousel.Item>
                            <img src={slider.slider_image} alt="Girl in a jacket" width="1500" height="600" />

                        </Carousel.Item>

                    )
                    )
                }
            </Carousel>

            <div>
                <h5 className='text-center wel'>Best Deals</h5>
                <img src="https://vsmart.ajspire.com/uploads/slider/1667297122.jpg" alt="Girl in a jacket" width="1400" height="600" />

            </div>
            <div>

                <h1 className='text-center'> Categories</h1>
                <section className="ftco-section ftco-category ftco-no-pt">
                    <div className="container">
                        <Carousel>
                            {/* Group categories in rows of 3 */}
                            {Categories.map((Cate, index) => {
                                if (index % 3 === 0) {
                                    const categorySlice = Categories.slice(index, index + 3);
                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="row">
                                                {categorySlice.map((category, subIndex) => (
                                                    <div className="col-md-4" key={subIndex}>
                                                        <div className="category-wrap  img mb-4 d-flex align-items-end" >
                                                            <img className='img' src={category.category_banner} alt="" srcset="" />
                                                            <div className="text px-3 py-1">
                                                                <h2 className="mb-0"><a href="#">{category.category_name}</a></h2>
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
                        {/* <button>View More</button> */}
                        <h6 className='text-center'>  <Link to='/categories'><i className="ion-ios-eye" />View More</Link></h6>
                    </div>
                </section>

            </div>
            <Featured />

           



            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Featured Products</span>
                            <h2 className="mb-4">Our Products</h2>
                            <p>A complete place for the complete shopping </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            Product.slice(0, 20).map((products) =>
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
                                                {token ? (<a className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-cart" onClick={() => addTocart(products.product_id)}>
                                                    {/* <span><i className= /></span> */}

                                                </a>) : <Link to={'/login'} />

                                                }
                                              {token ? (<a className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-heart" onClick={() => addToWish(products.product_id)}>
                                                    {/* <span><i className= /></span> */}

                                                </a>) : <Link to={'/login'} />

                                                }

                                                {/* <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                                    <span><i className="ion-ios-heart" /></span>
                                                </a> */}
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
                <h6 className='text-center'>  <Link to='/product'> <i className="ion-ios-eye" />View More</Link></h6>
            </section>
            <section class="ftco-section">
                <h2 className=" text-center  mb-4">SHOP BY BRANDS</h2>

                <div className="container">
                    <Carousel>

                        {
                            Brand.map((b, index) => {
                                if (index % 4 === 0) {
                                    const BrandSlice = Brand.slice(index, index + 4);


                                    return (
                                        <Carousel.Item key={index}>
                                            <div className="row">
                                                {
                                                    BrandSlice.map((b, subIndex) => (
                                                        <div className="col-md-3" key={subIndex} >

                                                            <div className="col all vegetables">
                                                                <div className="brand-wrap">

                                                                    <div className="brand-media">

                                                                        <img className='bimg' src={b.brand_banner} alt="brand" data-pagespeed-url-hash={3646614136} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                                                        <div className="brand-overlay"><a href="/product-shop/207"><i className="fas fa-link" /></a></div>
                                                                    </div>
                                                                    <div className="brand-meta">
                                                                        <p className=' center-text wel'>{b.brand_name}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                                </div>
                                        </Carousel.Item>
                                    )
                                }


                            }
                            )

                        }

                    </Carousel>
                </div>

                <h6 className='text-center'>  <Link to='/brand'> <i className="ion-ios-eye" /> View More Brands</Link></h6>

            </section>

        </div >

    )
}

export default Index