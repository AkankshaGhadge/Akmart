import React from 'react'
import { Link } from 'react-router-dom'

const Banking = () => {
    return (
        <div className='col-lg-12 col-md-6 col-sm-4'> 
            
            <div style={{ background: `url(https://static.vecteezy.com/system/resources/previews/022/277/376/original/banner-with-vegetables-copy-space-background-generative-ai-free-photo.jpeg)`, backgroundSize: 'cover', height: '475px' }}>
                <div className='heading'>
                    <h1>BANKING DETAILS</h1>
                    <h4> <i className="ion-ios-home" /><Link className='text-center' to='/index'>Home</Link> /  <Link to='/banking'>Banking</Link></h4>

                </div>
            </div>
        <h1 className='text-center'>BANKING DETAILS</h1>
        <img  className='text-center imgbank' src="https://vsmart.ajspire.com/images/icici.png" alt="" srcset="" />
       <div>
  <div className='table'>
    <table className="table-table-bordered" style={{width: '100%'}}>
      <thead>
        <tr>
          <th style={{backgroundColor: '#43A047'}} scope="col" className="text-white">Bank Name</th>
          <th style={{backgroundColor: '#43A047'}} scope="col" className="text-white">ICICI Bank</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name :</td>
          <td>Vishwakarma Super Mart Private Limited</td>
        </tr>
        <tr>
          <td>A/c No :</td>
          <td>646005004085</td>
        </tr>
        <tr>
          <td>Branch :</td>
          <td>Raviwar Peth Satara</td>
        </tr>
        <tr>
          <td>IFSC Code :</td>
          <td>ICIC0006460</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        </div>
    )
}

export default Banking