import React from 'react'
import { useState } from 'react';
import Customer from '../../Customer/Model/Customer';
import BootstrapTable  from 'react-bootstrap-table-next';
import AdminService from './../Service/AdminService';
import { useEffect } from 'react';

function AdminDashboard() {
    const [userDetails, setUserDetails] = useState(new Customer());
    let service = new AdminService();
    useEffect(()=>{
      getUserDetails();
    },[])
    const getUserDetails = ()=>{
      service.getAllCustomers().then((result)=>{
        setUserDetails(result);
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
        <button className="btn, btn-primary">Get All Customers</button>

        <BootstrapTable data={userDetails} col={columns}/>
    </div>
  )
}

export default AdminDashboard