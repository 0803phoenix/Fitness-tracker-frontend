import React from 'react'
import { useState } from 'react';
import AdminService from './../Service/AdminService';
import Table from './../../Layout/Component/Table';
import HeroImage from '../../Layout/Component/HeroImage';


function AdminDashboard() {
    const [userDetails, setUserDetails] = useState([]);
    let service = new AdminService();
    // useEffect(()=>{
    //   getUserDetails();
    // },[])
    const getUserDetails = ()=>{
      // console.log("Hiii");
      service.getAllCustomers().then((result)=>{
        setUserDetails(result);
        // console.log(result);
      }).catch((error)=>{
        alert("error")
      })
    }
    
    const columns=[
      {
        dataField:"userId",
        text:"User ID",
        sort:true,
      },
      {
        dataField:"firstName",
        text:"First_Name",
        sort:true,
      },
      {
        dataField:"lastName",
        text:"Last_Name",
        sort:true,
      },
      {
        dataField:"userEmail",
        text:"Email",
        sort:true,
      },
      {
        dataField:"gender",
        text:"Gender",
        sort:true,
      },
      {
        dataField:"age",
        text:"Age",
        sort:true,
      },
      {
        dataField:"bodyType",
        text:"Body_Type",
        sort:true,
      },
      {
        dataField:"weight",
        text:"Weight",
        sort:true,
      },
      {
        dataField:"height",
        text:"Height",
        sort:true
      },
      {
        dataField:"active",
        text:"Status_Active",
        sort:true
      },
    ]
  return (
    <div>
       <HeroImage
        src="https://source.unsplash.com/1400x500/?fitness"
        title="Welcome Admin"
        text="Keep track of your Customers"
      />
        <button className="btn, btn-primary" onClick={getUserDetails}>Get All Customers</button>
        {/* <CustomerDetailTable userDetail={userDetails} getUserDetail={getUserDetails}/> */}
        {console.log(userDetails)}
        <Table id='userId' data={userDetails} columns={columns}/>
    </div>
  )
}

export default AdminDashboard