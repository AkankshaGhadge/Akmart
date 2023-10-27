import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';

const Brand = () => {
  const [Brand, SetBrand] = useState([]);

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
  useEffect(() => {
   
   
    Getbrand();
  }, []);
  return (
    <div>
    
      <section class="ftco-section">
        <h2 className=" text-center  mb-4">SHOP BY BRANDS</h2>

        <div className="container">


          {
            Brand.map((b, index) => {
              if (index % 4 === 0) {
                const BrandSlice = Brand.slice(index, index + 4);


                return (

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

                )
              }


            }
            )

          }


        </div>



      </section>
      

    </div>
  )
}

export default Brand