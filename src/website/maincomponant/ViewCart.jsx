import React, { useEffect, useState } from 'react'
import Authuser from '../Authantication/Authuser';

const ViewCart = () => {
    const [cartItems, SetCartItems] = useState([])
    const [cartCount, SetCartCount] = useState([])
    const[cartId,setCartId] = useState([])
    const [subTotal, setSubTotal] = useState(0);
    const [pvTotal, setPVTotal] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [discountTotal, setDiscountTotal] = useState(0);
  const { http, user, logout, token } = Authuser();


    const getCardproduct = () => {
        http.get(`/get-cart-list`).then(
          (res) => {
            SetCartItems(res.data.cart);
            SetCartCount(res.data.cart.length)
            let subTotal = 0;
                        let pvTotal = 0;
                        let taxTotal = 0;
                        let discountTotal = 0;
                        res.data.cart.forEach((item) => {
                          subTotal += item.online_price * item.cart_product_qty;
                          pvTotal +=  pvTotal+parseFloat(item.products_basic_pv);
                          taxTotal += item.tax_per;
                          // Calculate discountTotal based on your logic
                          // discountTotal += ???
                        })
                        setSubTotal(subTotal);
                        setPVTotal(pvTotal);
                        setTaxTotal(taxTotal);
                        setDiscountTotal(discountTotal);
                       // Assuming the response contains the list of cart items
                      })
            
         
      }
      useEffect(() => {

        if (token) {
          getCardproduct();
    
        }
      }, [token],cartId)
    
      const RemovefromCart =(cart_id)=>
      {
        http.get(`/remove-to-cart/${cart_id}`).then((response)=>{
          console.log(response.data);
          setCartId(cart_id)
          alert('product remove from Cart successfully')
        }).catch((error)=>{
          console.error('Error removing product to cart',error);
        })
      }
//  const incrementQuantity = (index) => {
//     const updatedCartItems = [...cartItems];
//     updatedCartItems[index].cart_product_qty++;
//     SetCartItems(updatedCartItems);
//   };
  
//   const decrementQuantity = (index) => {
//     const updatedCartItems = [...cartItems];
//     if (updatedCartItems[index].cart_product_qty > 1) {
//       updatedCartItems[index].cart_product_qty--;
//       SetCartItems(updatedCartItems);
//     }
//   };
  
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
                                        </tr>
                                    </thead>
                                    {cartItems.map((el,index) => (
                                    <tbody>

                                        <tr className="text-center">
                                            <td>{index+1}</td>
                                            <td className="product-remove"><a  onClick={() => RemovefromCart(el.cart_id)}><span className="ion-ios-trash" /></a></td>
                                            <td className="image-prod"><div className="img"   /> <img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" className="cart-image" /></td>
                                            <td className="product-name">
                                                <h3>{el.english_name}</h3>
                                                
                                         </td>
                                            <td className="price">{el.sale_price}</td>
                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input type="number" name="quantity" className="quantity form-control input-number"value={el.cart_product_qty}/>
                                                </div>
                                            </td>
                                            <td className="total">{el.online_price*el.cart_product_qty}</td>
                                        </tr>{/* END TR*/}
                                        
                                    </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="cart-total mb-3">
                                <h3>Coupon Code</h3>
                                <p>Enter your coupon code if you have one</p>
                                <form action="#" className="info">
                                    <div className="form-group">
                                        <label htmlFor>Coupon code</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                </form>
                            </div>
                            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Apply Coupon</a></p>
                        </div>
                        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="cart-total mb-3">
                                <h3>Estimate shipping and tax</h3>
                                <p>Enter your destination to get a shipping estimate</p>
                                <form action="#" className="info">
                                    <div className="form-group">
                                        <label htmlFor>Country</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">State/Province</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">Zip/Postal Code</label>
                                        <input type="text" className="form-control text-left px-3" placeholder />
                                    </div>
                                </form>
                            </div>
                            <p><a href="checkout.html" className="btn btn-primary py-3 px-4">Estimate</a></p>
                        </div>
                        <div className="col-lg-4 mt-5 cart-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>pvtotal</span>
                                    <span>{ pvTotal}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Tax Total</span>
                                    <span>{taxTotal}</span>
                                </p>
                                {/* <p className="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                 </p> */}
                                <hr />
                                 <p className="d-flex total-price">
                                     <span>Total</span>
                                     <span>{ subTotal}</span>
                                 </p>
                             </div>
                             <p><a href="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
                         </div>
                     </div>
                 </div>
             </section>


        </div>


    )
}

export default ViewCart
