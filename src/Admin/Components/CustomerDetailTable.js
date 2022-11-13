import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Customer from '../../Customer/Model/Customer';

 import AdminService from './../Service/AdminService';

function CustomerDetailTable(props) {


  const [userDetails, setUserDetails] = useState(new Customer);
  let service = new AdminService();
  useEffect(() => {
    getUserDetails();
  }, [])
  const getUserDetails = () => {
    service.getAllCustomers().then((result) => {
      setUserDetails(result);
    })
  }


  return (
    <>
      <div className="container">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Body Type</th>
              <th scope="col">Weight</th>
              <th scope="col">Height</th>
              <th scope="col">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.userDetails.map((userDetail, index)=>{
              <tr>
                <th scope="row">{index+1}</th>
                <td>{userDetail.firstName}</td>
                <td>{userDetail.lasrName}</td>
                <td>{userDetail.age}</td>
                <td>{userDetail.gender}</td>
                <td>{userDetail.bodyType}</td>
                <td>{userDetail.weight}</td>
                <td>{userDetail.height}</td>
                <td>{userDetail.status}</td>
              </tr>
            })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CustomerDetailTable