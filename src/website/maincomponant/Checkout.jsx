import React, { useEffect, useState } from 'react'
import Authuser from '../Authantication/Authuser';
import { toast } from 'react-toastify';

const Checkout = () => {
    const notify = (M) => toast.error(M);
    const [cartItems, SetCartItems] = useState([])
    const [cartCount, SetCartCount] = useState([])
    const [cartId, setCartId] = useState([])
    const [subTotal, setSubTotal] = useState(0);
    const [pvTotal, setPVTotal] = useState(0);
    const [taxTotal, setTaxTotal] = useState(0);
    const [discountTotal, setDiscountTotal] = useState(0);
    const { http, user, logout, token } = Authuser();
    const [Order, setOder] = useState({
        product_id: [], // An array of product IDs
        product_qty: [], // An array of product quantities
        online_price: [], // An array of product prices
        discount: [], // An array of discounts
        pv_value: [], // An array of point values
    
        prototal: [], // An array of subtotals
        gst: [], // An array of GST values
    
        order_address: user.address, // Address for the order
        paymentmode: '', // Payment mode (adjust as needed)
        totalgst: '', // Total GST
    
        total: '', // Total order amount
        total_discount: '', // Total order discount
        totalpv: '', // Total point value
      })
    
    
      console.log("hello", Order);
    
      const getcartpproduct = () => {
        http.get(`/get-cart-list`)
          .then((response) => {
            const cartdata = response.data.cart;
            console.log(cartdata);
            const productIds = [];
            const productQtys = [];
            const productPrices = [];
            const productDiscounts = [];
            const productPvValues = [];
            const productTotals = [];
            const productGsts = [];
    
            cartdata.forEach((item) => {
              productIds.push(item.product_id);
              productQtys.push(item.cart_product_qty);
              productPrices.push(item.online_price);
              productDiscounts.push(item.discount);
              productPvValues.push(item.point_value);
              productTotals.push(item.cart_price);
              productGsts.push(item.tax_per);
    
    
            })
    
            // Assuming the response contains the list of cart items
    
    
            setOder((prevOrder) => ({
              ...prevOrder,
              product_id: productIds, // An array of product IDs
              product_qty: productQtys, // An array of product quantities
              online_price: productPrices, // An array of product prices
              discount: productDiscounts, // An array of discounts
              pv_value: productPvValues, // An array of point values
              prototal: productTotals, // An array of subtotals
              gst: productGsts,
    
            }))
    
            SetCartItems(cartdata);
          })
      };
    
      const Onsubmit = (e) => {
        e.preventDefault();
        http.post(`/order_now`, Order)
          .then((res) => {
            console.log(res.data);
            setOder(res.data)
            alert('oredered')
            // setOder(res.data.order_now)
            // if (res.data.token) {
            //   setToken(res.data.user_data, res.data.token);
    
            //   navigate("/order");
            // } else {
              notify(res.data.message);
            // }
    
          })
          .catch((error) => {
            console.log(error)
            // notify(data.message); // Notify on error
          });
    
      };
    
    
    
      useEffect(() => {
        getcartpproduct();
      }, [token])
    
      useEffect(() => {
        // Calculate the subtotal whenever the cart items change
    
        const newSubtotal = cartItems.reduce(
          (accumulator, item) => accumulator + item.online_price * item.cart_product_qty,
          0
        );
        setSubTotal(newSubtotal);
    
        // Calculate the Gst whenever the cart items change
        // $gst = ($subto * $task->tax_per) / (100 + $task->tax_per);
        const gst = cartItems.reduce(
          (accumulator, item) => accumulator + (item.online_price , item.cart_product_qty , item.tax_per) / (100 + item.tax_per),
          0
        );
        setTaxTotal(gst);
        // Calculate the P v whenever the cart items change
    
        const pv = cartItems.reduce(
          (accumulator, item) => accumulator + item.point_value,
          0
        );
        setPVTotal(pv);
        // Calculate the Discount whenever the cart items change
    
        const disc = cartItems.reduce(
          (accumulator, item) => {
            console.log('Total Discount:', item.total_discount);
            const totalDiscount = parseFloat(item.total_discount);
            return accumulator + totalDiscount;
          }
          ,
          0
        );
        setDiscountTotal(disc);
        console.log(disc);
    
    
        setOder((prevOrder) => ({
          ...prevOrder,
          total: newSubtotal,
          totalgst: gst,
          total_discount: disc,
          totalpv: pv,
        }));
      }, [cartItems]);
    
      const OninputChange = (e) => {
        console.log(e);
        // Set({ ...Order, [e.target.name]: e.target.value });
        setOder((prevOrder) => ({
          ...prevOrder,
          [e.target.name]: e.target.value
        }));
    }
    
 

    return (
        <div>
            CheckOut
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
                                    {cartItems.map((el, index) => (
                                        <tbody>

                                            <tr className="text-center">
                                                <td>{index + 1}</td>
                                                {/* <td className="product-remove"><a onClick={() => RemovefromCart(el.cart_id)}><span className="ion-ios-trash" /></a></td> */}
                                                <td className="image-prod"><div className="img" /> <img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" className="cart-image" /></td>
                                                <td className="product-name">
                                                    <h3>{el.english_name}</h3>

                                                </td>
                                                <td className="price">{el.sale_price}</td>
                                                <td className="quantity">
                                                    <div className="input-group mb-3">
                                                        <input type="number" name="quantity" className="quantity form-control input-number" value={el.cart_product_qty} />
                                                    </div>
                                                </td>
                                                <td className="total">{el.online_price * el.cart_product_qty}</td>
                                            </tr>{/* END TR*/}

                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                    <section className="ftco-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 ">
                                    <form action="#" className="billing-form">
                                        <h3 className="mb-4 billing-heading">Billing Details</h3>
                                        <div className="row align-items-end">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstname">Firt Name</label>
                                                    <input type="text" className="form-control" placeholder value={user.name} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Last Name</label>
                                                    <input type="text" className="form-control" placeholder value={'Ghadge'} />
                                                </div>
                                            </div>
                                            <div className="w-100" />
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="country">State / Country</label>
                                                    <input type="text" className="form-control" placeholder value={user.address} />

                                                    
                                                </div>
                                            </div>
                                            <div className="w-100" />
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="streetaddress">Street Address</label>
                                                    <input type="text" className="form-control" placeholder="House number and street name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
                                                </div>
                                            </div>
                                            <div className="w-100" />
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="towncity">Town / City</label>
                                                    <input type="text" className="form-control" placeholder />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="postcodezip">Postcode / ZIP *</label>
                                                    <input type="text" className="form-control" placeholder />
                                                </div>
                                            </div>
                                            <div className="w-100" />
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Phone</label>
                                                    <input type="text" className="form-control" placeholder value={user.mob_no} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="emailaddress">Email Address</label>
                                                    <input type="text" className="form-control" placeholder value={user.email}/>
                                                </div>
                                            </div>
                                            <div className="w-100" />
                                            <div className="col-md-12">
                                                <div className="form-group mt-4">
                                                    <div className="radio">
                                                        <label className="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
                                                        <label><input type="radio" name="optradio" /> Ship to different address</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>{/* END */}
                                </div>
                                <div className="col-xl-5">
                                    <div className="row mt-5 pt-3">
                                        <div className="col-md-12 d-flex mb-5">
                                            <div className="cart-total mb-3">
                                                <h3>Cart Totals</h3>
                                                <p className="d-flex">
                                                    <span>pvtotal</span>
                                                    <span>{pvTotal}</span>
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
                                                    <span>{subTotal}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="cart-detail p-3 p-md-4">
                                                <h3 className="billing-heading mb-4">Payment Method</h3>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <div className="radio">
                                                            <label><input type="radio" name="optradio" className="mr-2"  onClick={(e)=>OninputChange(e)}/> Cash On Delivery</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <div className="radio">
                                                            <label><input type="radio" name="optradio" className="mr-2" /> Check Payment</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <div className="radio">
                                                            <label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-12">
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" defaultValue className="mr-2" /> I have read and accept the terms and conditions</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p><a href="#" className="btn btn-primary py-3 px-4" onClick={(e)=>Onsubmit(e)}>Place an order</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* .col-md-8 */}
                            </div>
                        </div>
                    </section> {/* .section */}


                </div>


            </section>


        </div>


    )
}

export default Checkout
