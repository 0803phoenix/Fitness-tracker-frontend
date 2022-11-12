import React from 'react'
import { useState } from 'react';
import Customer from '../../Customer/Model/Customer';
// import BootstrapTable  from 'react-bootstrap-table-next';
import AdminService from './../Service/AdminService';
import { useEffect } from 'react';
import CustomerDetailTable from './CustomerDetailTable';
import Table from './../../Layout/Component/Table';

function AdminDashboard() {
    const [userDetails, setUserDetails] = useState(new Customer());
    let service = new AdminService();
    // useEffect(()=>{
    //   getUserDetails();
    // },[])
    const getUserDetails = ()=>{
      console.log("Hiii");
      service.getAllCustomers().then((result)=>{
        setUserDetails(result);
        console.log(result);
      }).catch((error)=>{
        alert("error")
      })
    }
    
    const columns=[
      {
        dataField:"firstName",
        text:"First_Name",
      },
      {
        dataField:"lastName",
        text:"Last_Name"
      },
      {
        dataField:"userEmail",
        text:"Email"
      },
      {
        dataField:"gender",
        text:"Gender"
      },
      {
        dataField:"age",
        text:"Age"
      },
      {
        dataField:"bodyType",
        text:"Body_Type"
      },
      {
        dataField:"weight",
        text:"Weight"
      },
      {
        dataField:"height",
        text:"Height"
      },
      {
        dataField:"active",
        text:"Status_Active"
      },
    ]
  return (
    <div>
        <button className="btn, btn-primary" onClick={getUserDetails}>Get All Customers</button>
        {/* <CustomerDetailTable userDetail={userDetails} getUserDetail={getUserDetails}/> */}
        {/* <Table data={userDetails.data} columns={columns}/> */}
    </div>
  )
}

export default AdminDashboard