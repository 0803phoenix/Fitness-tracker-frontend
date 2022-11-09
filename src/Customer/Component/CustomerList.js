import React from "react";
import { useState } from "react";
import Customer from "./../Model/Customer";
import { useNavigate } from "react-router";
import Header from './../../Layout/Component/Header';
import CustomerService from './../Service/CustomerService';

function CustomerList() {
  const [customers, setCustomer] = useState({ customer: new Customer() });
  const navigate = useNavigate();
  let service= new CustomerService();
  return (
    <div>
      <Header
        title="React SPA using Router"
        description="A single-page application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages."
      />

      <h1>Add Customer Details</h1>
      <form>
        <div className="form-group">
          <label>Useremail</label>
          <input
            className="form-control"
            type="text"
            id="useremail"
            placeholder="Enter User email"
            value={customers.customer.userEmail}
            onChange={(e) =>
              setCustomer({
                customer: { ...customers.customer, userEmail: e.target.value },
              })
            }
          />
        </div>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            e.preventDefault();
            service
              .customer(customers.customer)
              .then((result) => {
                alert(JSON.stringify(result));
                sessionStorage.setItem("currentUser", JSON.stringify(result));
                sessionStorage.setItem("useremail", customers.customer.userEmail);
                navigate("/home");
              })
              .catch((error) => {
                //alert(error.message);
                alert("Invalid Username/Password. Please try again!");
              });
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CustomerList;
