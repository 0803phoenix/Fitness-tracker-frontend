import React from 'react'
import NavBarLogout from '../../Layout/Component/NavBarLogout';
import NavBar from '../../Layout/Component/NavBar';
import Footer from '../../Layout/Component/Footer';

export default function UserProfile() {
    
    const customer=JSON.parse(sessionStorage.getItem('customerDetails'));
    return (
        <>
        <div>
        {sessionStorage.getItem('currentUser')==null?<NavBar />:<NavBarLogout/>}
        </div>
        {/* <div style={{
        backgroundImage:
          "url('https://source.unsplash.com/2400x1000/?gym, exercise')",
        height: '100vh',
        
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity:0.6
      }}> */}
        <h2 >Hello {customer.firstName} !!!</h2>
        <div className=" p-5 ">           
           <form>
            <div className="form-row my-3 ">
            <div className="form-group col-md-6">
              <label >First Name: </label>
              <input type="text" placeholder={customer.firstName} disabled/>
            </div>
            <div className="form-group col-md-6">
              <label>Last Name: </label>
              <input type="text" placeholder={customer.lastName} disabled/>

            </div>
            </div>
            
            <div className='form-row '>
            <div className="form-group col-md-4">
              <label >Gender: </label>
              <input type="text" placeholder={customer.gender} disabled/>
            </div>
            <div className="form-group col-md-4">
              <label>Age: </label>
              <input type="text" placeholder={customer.age} disabled/>
            </div>
            <div className="form-group col-md-4">
              <label >Body Type: </label>
              <input type="text" placeholder={customer.bodyType} disabled/>
            </div>
            </div>
            <div className="form-row">
            <div className="col float-left">
              <label>Weight: </label>
              <input
                className="form-control"
                type="number"
                placeholder={customer.weight}
                disabled
              />
            </div>
            <div className="col float-right">
              <label>Height in cm: </label>
              <input
                className="form-control"
                type="number"           
                placeholder={customer.height}
                disabled
              />
            </div>
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder={customer.userEmail}
                disabled
              />
            </div>
            
          </form>
        </div>
        <Footer/>
        </>
    )
}