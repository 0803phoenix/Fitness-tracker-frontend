import React from 'react'
import { useState } from 'react';
import UserService from "../../Authentication/Service/UserService";
import NavBarLogout from '../../Layout/Component/NavBarLogout';
import NavBar from '../../Layout/Component/NavBar';
import Footer from '../../Layout/Component/Footer';
import UserProfileService from './../UserProfileService/UserProfileService';
export default function UserProfile() {
    const[email,setEmail]=useState({
        newEmail:''
    });
    const[height,setHeight]=useState({
        updatedHeight:0
    });
    const[weight,setWeight]=useState({
        updatedWeight:0
    });
    let service = new UserProfileService();
    let userservice= new UserService();

    const updateEmail = (email) =>{
        service
        .updateEmail(email)
        .then((result)=>{
          alert(JSON.stringify(result));
            setEmail(result);
        }).catch((error)=>{
            alert(error);
        });
    }
    const updateHeight = (height) =>{
        service
        .updateHeight(height)
        .then((result)=>{
          alert(JSON.stringify(result));
            setHeight(result);
        }).catch((error)=>{
            alert(error);
        });
    }
    const updateWeight = (weight) =>{
        alert(JSON.stringify(weight))
        service
        .updateWeight(weight)
        .then((result)=>{
          alert(JSON.stringify(result));
            setWeight(result);
        }).catch((error)=>{
            alert(error);
        });
    }
    
    const getCustomerDetails = () =>{
        userservice
        .getCustomer()
        .then((result)=>{
            sessionStorage.setItem('customerDetails',JSON.stringify(result));
          alert(JSON.stringify(result));
            // const customer=JSON.parse(sessionStorage.getItem('cust'));
        }).catch((error)=>{
            alert(error);
        });
    }
    const handleWeight=(e)=>{
        e.preventDefault();
        setWeight({updatedWeight:e.target.value});
    }
    const handleHeight=(e)=>{
        e.preventDefault();
        setHeight({updatedHeight:e.target.value});
    }
    const handleEmail=(e)=>{
        e.preventDefault();
        setEmail({updatedEmail:e.target.value});
    }
    
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
                name="weight"
                placeholder={customer.weight}
                value={weight.updatedWeight}
                
                onChange={handleWeight}
              />
              <button onClick={updateWeight}>Update Weight</button>
            </div>
            <div className="col float-right">
              <label>Height in cm: </label>
              <input
                className="form-control"
                type="number" 
                name="height"              
                placeholder={customer.height}
                value={height.updatedHeight}
                onChange={handleHeight}
                
              />
              <button onClick={updateHeight}>Update Height</button>
            </div>
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="userEmail"
                placeholder={customer.userEmail}
                value={email.updatedEmail}
                onChange={handleEmail}
              />
              <button  type="submit"onClick={updateEmail}>Update Email</button>
            </div>
            
          </form>
        {/* </div > */}
        </div>
        <Footer/>
        </>
    )
}