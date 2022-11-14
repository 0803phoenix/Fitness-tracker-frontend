import React from 'react'
import { useState } from 'react';
import AdminService from './../Service/AdminService';
import { useEffect } from 'react';
import HeroImage from '../../Layout/Component/HeroImage';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import UploadFiles from './UploadFiles';
import Modal from "react-bootstrap/Modal";

// import { Button } from 'react-bootstrap';

function AdminDashboard() {
  const [isShown, setIsShown] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [userDetails, setUserDetails] = useState([]);
  let service = new AdminService();
  const [showTable, setShowTable] = useState(false);

  const handleClick = (event) => {
    setShow(true);
    setIsShown((current) => !current);
  };


  const getUserDetails = () => {
    // console.log("Hiii");
    service.getAllCustomers().then((result) => {
      setUserDetails(result);
      setShowTable(true);
      // console.log(result);
    }).catch((error) => {
      alert("error")
    })
  }
  const getUserById = (username) => {
    service.getCustomerById(username).then((result) => {
      setUserDetails(result);
    })
  }


  const handleDelete = (username) => {
    console.log(username);
    service.deleteCustomerById(username).then(() => {
      // console.log(username+ "user Deleted");
      window.location.reload();
    })
  };

  const columns = [
    {
      dataField: "userId",
      text: "User ID",
      sort: true,
      editable: false,
    },
    {
      dataField: "username",
      text: "User Name",
    },
    {
      dataField: "firstName",
      text: "First_Name",
      sort: true,
      editable: false,
      filter: textFilter(),
    },
    {
      dataField: "lastName",
      text: "Last_Name",
      sort: true,
      editable: false,
      filter: textFilter(),
    },
    {
      dataField: "userEmail",
      text: "Email",
      sort: true,
      editable: false,
      filter: textFilter(),
    },
    {
      dataField: "gender",
      text: "Gender",
      sort: true,
      editable: false,
      filter: textFilter(),
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      editable: false,
    },
    {
      dataField: "bodyType",
      text: "Body_Type",
      sort: true,
      editable: false,

    },
    {
      dataField: "weight",
      text: "Weight",
      sort: true,

    },
    {
      dataField: "height",
      text: "Height",
      sort: true,
    },
    {
      dataField: "active",
      text: "Status_Active",
      sort: true
    },
    {
      text: 'Delete',
      formatter: (cellContent, row) => {
        return (
          <button
            className="btn btn-danger btn-xs"
            onClick={() => handleDelete(row.username)}
          >
            Delete
          </button>
        );
      },
      editable: false
    }
  ]
  return (
    <div>
      <HeroImage
        src="https://source.unsplash.com/1400x500/?fitness"
        title="Welcome Admin"
        text="Keep track of your Customers"
      />




      <div className="card-group px-1 py-1">
        <div className="card bg-dark text-white m-1">
          <img
            className="card-img"
            src="https://source.unsplash.com/1400x500/?bodybuilding"
            style={{ filter: "brightness(50%)" }}
            alt="Card image"
          />
          <div
            className="card-img-overlay"
            style={{
              position: "absolute",
              top: "20%",
              left: "0",
              width: "100%",
            }}
          >
            <h5
              className="card-title pb-4"
              style={{ fontSize: "30px", fontWeight: "light" }}
            >
              Get all Customer Details
            </h5>

            <button
              type="button"
              className="btn btn-outline-light mb-2 "
              onClick={getUserDetails}
            >
              View
            </button>
          </div>
        </div>

        <div className="card bg-dark text-white m-1">
          <div class="bg-image hover-zoom">
            <img
              className="card-img"
              src="https://source.unsplash.com/1400x500/?diet"
              style={{ filter: "brightness(50%)" }}
              alt="Card image"
            />
          </div>
          <div
            className="card-img-overlay"
            style={{
              position: "absolute",
              top: "20%",
              left: "0",
              width: "100%",
            }}
          >
            {(
              <h5
                className="card-title pb-4"
                style={{ fontSize: "30px", fontWeight: "light" }}
              >
                Upload Diet List
              </h5>
            )}
            {(
              <button
                type="button"
                className="btn btn-outline-light mb-2 "
                onClick={handleClick}
              >
                Add
              </button>
            )}
            <Modal show={show} onHide={handleClose}>
              <UploadFiles />
            </Modal>


          </div>
        </div>
      </div>


      {showTable ? <BootstrapTable keyField='userId'
        data={userDetails}
        columns={columns}
        striped
        bordered
        hover
        pagination={paginationFactory()}
        cellEdit={cellEditFactory({
          mode: "click"
        })}
        filter={filterFactory()} /> : null}
    </div>
  )
}

export default AdminDashboard