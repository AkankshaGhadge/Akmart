// import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import Authuser from '../Authantication/Authuser';




const Header = () => {
  const { http, user, logout, token } = Authuser();
  console.log(token)
  const [Cate, Setcate] = useState([]);
  const [SubCate, SetSubcate] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [brand, setbrand] = useState([]);
  const [cartItems, SetCartItems] = useState([])
  const [cartCount, SetCartCount] = useState([])
  const [WishItems, SetWishItems] = useState([])
  const [WishCount, SetWishCount] = useState([])
  const [cartId, setCartId] = useState([])

    const [search, setsearch] = useState('');
  const [params, setparams] = useSearchParams();

  const handleInputchange = (e) => {
    setsearch(e.target.value)
  }
  const Getbrand = () => {
    fetch('https://vsmart.ajspire.com/api/brands')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setbrand(data.brands);
      });
  }
  const [showBrandMegaMenu, setShowBrandMegaMenu] = useState(false);
  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };
  const brandMouseEnter = () => {
    setShowBrandMegaMenu(true);
  };

  const brandMouseLeave = () => {
    setShowBrandMegaMenu(false);
  };
  const [showCartMegaMenu, setShowCartMegaMenu] = useState(false);

  const CartMouseclick = () => {
    setShowCartMegaMenu(true);
  };
  const CartMouseofclick = () => {
    console.log("Hello G");

    setShowCartMegaMenu(false);
  };
  const Getcate = () => {
    fetch('https://vsmart.ajspire.com/api/categories').then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        data.categories.forEach((category) => { getsubcate(category.category_id) })
        Setcate(data.categories);
      }
    )
  }
  const getsubcate = (category_id) => {
    fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        const newsubcate = data.subcategories
        SetSubcate((previoussubcate) => {
          const filtersubcate = newsubcate.filter((newsubcate) => !previoussubcate.some((previoussubcate) => previoussubcate.subcategory_id === newsubcate.subcategory_id));
          return [...previoussubcate, ...filtersubcate];
        });
      }
    )
  }
  const getCardproduct = () => {
    http.get(`/get-cart-list`).then(
      (res) => {
        SetCartItems(res.data.cart);
        SetCartCount(res.data.cart.length)
      }

    )
  }


  useEffect(() => {
    Getcate();
    Getbrand();

  }, []);
  useEffect(() => {

    if (token) {
      getCardproduct();
      // getWishproduct();

    }
  }, [token], cartId)
  const getWishproduct = () => {
    http.get(`/get-wishlist`).then(
      (res) => {
        SetWishItems(res.data.wishlist);
        SetWishCount(res.data.wishlist.length)
      }

    )
  }
  useEffect(() => {

    if (token) {
      getWishproduct();

    }
  }, [token])
  const RemovefromCart = (cart_id) => {
    http.get(`/remove-to-cart/${cart_id}`).then((response) => {
      console.log(response.data);
      setCartId(cart_id)
      alert('product remove from Cart successfully')
    }).catch((error) => {
      console.error('Error removing product to cart', error);
    })
  }



  return (
    <div className='col-lg-12 col-md-3 col-sm-6' >

      <div className=" bg-primary">
        <div className="container">

          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                  <span className="text">youremail@email.com</span>
                </div>
                
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-shopping-cart" /></div>
                  <a className="text" href='myorder'> 
                   Orders</a>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <a className="text">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">

          <a className="navbar-brand logo" href="/">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
              aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <img src="http://vsmart.ajspire.com/images/logo1.png" alt="" srcset="" />VS Mart</a>
          <h6 className="text-Dark">{token ? (
            <a href="/Profile">
              <span className="icon-user" /> {user.name}
            </a>
          ) : (
            <h6>
              <a href="#">
                <i className="icon-user" /> My Account
              </a>
            </h6>
          )}
          </h6>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <Link className='text-center' to='/'>Home</Link>
              <li className="nav-item active"><a href="Index.jsx" className="nav-link"></a></li>

              <li className="nav-item dropdown">

                <li className="nav-item">


                  <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a className='nav-item active' href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>




                    <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-420px' }}>
                      <div className="row" style={{ height: '300px', width: 'auto', marginLeft: '-10px', overflowY: 'scroll' }}>
                        {
                          Cate.map((el) => (

                            <div key={el.category_id} className="col-sm-3">

                              <h5 className='font-weight-bold'>{el.category_name}</h5>



                              <ul>
                                {
                                  SubCate.filter((sub) => sub.subcategory_category_id === el.category_id).map((sub) => (
                                    <Link to={`/product-shop/${el.category_id}/${sub.subcategory_id}`} ><li key={sub.subcategory_id}>{sub.subcategory_name}</li></Link>
                                  ))
                                }


                              </ul>




                            </div>
                          ))
                        }
                      </div>
                      <h6 className='text-center'><Link to='/categories'>View More</Link></h6>

                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </li>
              <li className="navbar-item dropdown-megamenu">
                <Link to="/" className="nav-item nav-link" onMouseEnter={brandMouseEnter} onMouseLeave={brandMouseLeave}>
                  <li className='b'><a className='nav-item active' href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brand</a></li>
                </Link>

                <Dropdown show={showBrandMegaMenu} onMouseEnter={brandMouseEnter} onMouseLeave={brandMouseLeave}>
                  <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-420px' }}>
                    <div className="row" style={{ height: '300px', width: 'auto', marginLeft: '-10px', overflowY: 'scroll' }}>
                      {
                        brand.map((sub) => (


                          <div className="col-md-3">
                            <div className="megamenu-wrap">

                              <ul className="megamenu-list sub">

                                <Link to={`/product-shop/${sub.brand_id}`}>
                                  <li key={sub.brand_id}>
                                    {sub.brand_name}
                                  </li>
                                </Link>


                              </ul>
                            </div>
                          </div>
                        ))
                      }



                    </div>
                    <h6 className='text-center'><Link to='/brand'>View More</Link></h6>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item nav">
                <Link to='/shop'>Shop</Link></li>
              <li className="nav-item nav">
                <Link to='/about'>About</Link></li>
              <li> <Link to='/banking'> Banking</Link></li>

              {/* <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li> */}
              {/* <Link className='text-center' to='/login'>Login</Link> */}
              {token ? (

                <Link onClick={logout} ><i className="icon-unlock" /> Logout</Link>
              ) : (
                <Link to="/login"><i class="icon-lock"></i> Login</Link>
              )}
              {/* <li className="nav-item"><a href="contact.html" className="nav-link">Login</a></li> */}
              <li className="navbar-item dropdown-megamenu" >
                <Link className="nav-item nav-link" onClick={CartMouseclick} >
                  <li className='b'>
                    <a className='nav-item active' href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="icon-shopping_cart" >Cart [{cartCount}]
                      </span>
                    </a>
                  </li>
                </Link>

                <Dropdown show={showCartMegaMenu} alignRight onClick={CartMouseclick} onMouseLeave={CartMouseofclick}>
                  <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: 'auto', marginLeft: '-10px' }}>
                    <div className='row' style={{ height: '300px', width: 'auto', marginLeft: '-10px', overflowY: 'scroll' }}>
                      {cartItems.map((el) => (
                        <div className="cart-item">
                          <button className='btn btn-danger' onClick={() => RemovefromCart(el.cart_id)}> <span className="icon-trash"></span></button>
                          <img src={`https://vsmart.ajspire.com/uploads/product_image/${el.product_image}`} alt="" className="cart-image" />
                          <p className="cart-product-name" style={{ textAlign: "center" }}>{el.english_name}</p>
                        </div>
                      ))}
                    </div>
                    <h6 className='text-center'>  <Link to='/viewcart'> <i className="ion-ios-eye" /> View More Product</Link></h6>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li className="b">

                <Link to={'/wishlist'} className="nav-item nav-link " >
                  <li>
                    <a className='nav-item active' href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="icon-heart"> [{WishCount}]</span>
                    </a>
                  </li>
                </Link>
              </li>


              <li className="nav-item nav">
                <form action="#" class="hm-searchbox">
                  {/* <select class="nice-select select-search-category">
                  </select> */}
                  <input type="text" placeholder="Enter your search key ..."
                    value={search} onChange={handleInputchange}
                  />
                  <Link to={`/search?q=${encodeURIComponent(search)}`} onChange={() => setparams({ q: search })}> <button class="li-btn" >        < i class="icon-search"></i></button></Link>
                </form>
              </li>

              {/* <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li> */}


            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header