import React, { useEffect, useState } from 'react'
import Authuser from '../Authantication/Authuser';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const [WishItems, SetWishItems] = useState([])
  const [WishCount, SetWishCount] = useState([])
  const [WishId, SetWishId ]= useState([])

  const { http, token } = Authuser();


  const getWishproduct = () => {
    http.get(`/get-wishlist`).then(
      (res) => {
        console.log(res)
        SetWishItems(res.data.wishlist);
        // SetWishCount(res.data.wishlist.length)
      }

    )
  }
  useEffect(() => {

    if (token) {
      getWishproduct();

    }
  }, [token],WishId)
  const addTocart = (product_id) => {
    http.get(`/add-to-cart/${product_id}`)
      .then((response) => {
        console.log(response.data);
        alert('product added to cart successfully ')
      })
      .catch((error) => {
        console.error('Error adding product to cart', error);
      });


  }
  // const RemoveWishlist = (wishlistNumber) => {
  //   http.get(`/remove-from-wishlist/${wishlistNumber}`)
  //     .then(() => {
  //       console.log(`Item with wishlist number ${wishlistNumber} removed from wishlist.`);
        
  //       SetWishId(wishlistNumber);
  //       alert('product remove from wishlist')
        
  //     })
  //     .catch((error) => {
  //       console.error('Error removing item from wishlist:', error);
  //     });
  // };
  const RemoveWishlist =(wishlistNumber)=>
  {
    http.get(`/remove-from-wishlist/${wishlistNumber}`).then((response)=>{
      console.log(response.data);
      SetWishId(wishlistNumber)
      alert('product remove from wishlist successfully')
    }).catch((error)=>{
      console.error('Error removing product to wishlist',error);
    })
  }


  return (
    <div>
      <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
              <h1 className="mb-0 bread">My Cart</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
              <div className="cart-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>Sr.No</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>Product name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>&nbsp;&nbsp;Add To Cart</th>

                    </tr>
                  </thead>

                  <tbody>
                    {
                      WishItems.map((el,index) => (



                        <tr className="text-center">
                          <td>{index+1}</td>
                          <td className="product-remove">
                          {token ? (<a  onClick={() => RemoveWishlist(el.wishe_id)}> <span className="ion-ios-close" />
                            {/* <span><i className= /></span> */}
                          </a>) : <Link to={'/login'} />

                          }
                          </td>
                          <td className="image-prod"><div className="img" /> <img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" className="cart-image" /></td>
                          <td className="product-name">
                            <h3>{el.english_name}</h3>

                          </td>
                          <td className="price">{el.sale_price}</td>
                          <td className="quantity">
                            <div className="input-group mb-3">
                              <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                            </div>
                          </td>
                          <td className="total">$4.90</td>
                          <td>{token ? (<button className="btn btn-primary py-3 px-4" onClick={() => addTocart(el.product_id)}> Add To Cart
                            {/* <span><i className= /></span> */}
                          </button>) : <Link to={'/login'} />

                          }
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>

                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Wishlist
