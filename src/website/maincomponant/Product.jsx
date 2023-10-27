import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Authuser from '../Authantication/Authuser';
import { Button } from 'react-bootstrap';

const Product = () => {
    const [Product, Setproduct] = useState([]);
    const { http, token } = Authuser();

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
        GetProduct();

    }, []);
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
        <>

            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ">
                            <span className="subheading">Featured Products</span>
                            <h2 className="mb-4">All Products</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            Product.map((products) =>
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
                                                    {token ? (<Button className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-cart" onClick={() => addTocart(products.product_id)}>
                                                        {/* <span><i className= /></span> */}

                                                    </Button>) : <Link to={'/login'} />

                                                    }
                                                  {token ? (<Button className="buy-now d-flex justify-content-center align-items-center mx-1 ion-ios-heart" onClick={() => addToWish(products.product_id)}>
                                                        {/* <span><i className= /></span> */}

                                                    </Button>) : <Link to={'/login'} />

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
            </section>
        </>
    )
}

export default Product