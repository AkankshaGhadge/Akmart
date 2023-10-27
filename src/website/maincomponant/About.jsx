import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <Link to='/about'></Link>
     


      <div style={{ background: `url(https://shopiclix.com/adminpanel/upload/slider/1679574169494.png)`, backgroundSize: 'cover', height: '475px' }}>
        <div className='heading'>
          <h1>ABOUT OUR COMPANY</h1>
          <h4> <i className="ion-ios-home" /><Link className='text-center' to='/index'>Home</Link> /  <Link to='/about'>About</Link></h4>

        </div>
      </div>
      <div className='row' >
        <div className='heading col-lg-6'>
          <h1>Vishwakarma Super Mart Private Limited</h1>
          <h5>is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life. Our aim is to deliver the best products directly to our consumers, who form the core of the company. Our networks of registered distributors are trained leaders and representatives who ensure that consumers get the best products, with additional free business opportunity benefits. The profitable opportunities offered have influenced many customers to purchase products from non-retail environments, owing to the expansion of direct selling across the country.</h5>

        </div>
        <div className='col-lg-6'>
          <img src="https://vsmart.ajspire.com/images/about1.png" alt="" />
        </div>
        <hr />
      </div>
      <div className='row' >
        <div className='heading col-lg-6'>
          <h1 className='wel'>Our Vision</h1>
          <h5> Vishwakarma Super Mart Private Limited to strive hard continuously and constantly to make every individual customer financially self-reliant, economically and socially strong through the self - help team concept.</h5>

        </div>
        <div className='heading col-lg-6'>
          <h1 className='wel'>Our Mission</h1>
          <h5>
            Vishwakarma Super Mart Private Limited has vision to create wealth that provides personal, professional, social, financial and spiritual growth to everyone. We aim to provide the highest level of quality and service possible with respect to the products and services that we offer and strive to create an environment and culture that lends itself to our distributor’s success.</h5>
        </div>
        <hr />
      </div>
      <h1 className='text-center wel top'>Why People Choose Their Daily Organic Life With Us</h1>
      <div className='row top' >

        <div className='heading col-lg-6'>
          <h4 className='wel'>Free Shipping</h4>
          <h6>VS Mart, gives product delivery for all customers free that is plus point of order</h6>
        </div>
        <div className='heading col-lg-6'>
          <h4 className='wel'>Gift Cards</h4>
          <h6>VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card. Gifts gives to customers reward points</h6>
        </div>
        <div className='heading col-lg-6'>
          <h4 className='wel'>Reward Points</h4>
          <h6>VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card.</h6>
        </div>
        <div className='heading col-lg-6'>
          <h4 className='wel'>Easy Return</h4>
          <h6>One major factor that dictates where online shoppers make purchases is whether you have a clear and generous eCommerce returns policy. Studies have shown that solid return policies increase sales without increasing the volume of return.</h6>
        </div>
        <hr />
      </div>


    
    </div>
  )
}

export default About