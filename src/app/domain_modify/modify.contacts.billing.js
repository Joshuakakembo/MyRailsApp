import React from "react";
import { Dropdown } from "react-bootstrap";
export default function Billing() {
  return (
    <div className="container-fluid">
      <nav className="bg-white mb-5" style={{ height: "70px" }}>
        <div className="d-flex justify-content-between py-4 px-4 align-middle">
          <div className="">
            <h6 className="font-weight-dark">Billing modifications</h6>
          </div>
          <div class="dropdown" style={{ marginTop: "-10px" }}>
            {/* <button
              class="btn btn-primary dropdown-toggle mb-4"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Edit Domain Details
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Edit Domains 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Billing</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-10 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              {/* <h6 className="font-weight-dark">Registrant modifications</h6> */}
              <form className="pt-8">
                <div className="d-lg-flex justify-content-between">
                  <div className="col-lg-6">
                    <div className="form-group col-lg-12 ">
                      <label for="first_name">First Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg w-lg-100"
                        id="first_name"
                        placeholder="First Name"
                        // onChange={handleInputChange}
                        // value={values.d_name}
                        name="first_name"
                      />
                    </div>
                    <div className="form-group col-lg-12 ">
                      <label for="last_name">Last Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg w-lg-100"
                        id="last_name"
                        placeholder="Last Name"
                        // onChange={handleInputChange}
                        // value={values.d_name}
                        name="last_name"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Email"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="email"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="organization">Organization</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="organization"
                        placeholder="Organization"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="organization"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="country">Country</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="country"
                        placeholder="Country"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="country"
                      />
                    </div>

                    
                  </div>
                  <div className="col-lg-6 ">
                  <div className="form-group col-lg-12">
                      <label for="city">City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="city"
                        placeholder="City"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="city"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="street_address">Street Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="street_address"
                        placeholder="Street Address"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="street_address"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="mobile">Mobile</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="mobile"
                        placeholder="Mobile"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="phone"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="postal_code">Postal Code</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="postal_code"
                        placeholder="Postal Code"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="postal_code"
                      />
                    </div>
                    <div className="form-group col-lg-12">
                      <label for="fax">Fax</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fax"
                        placeholder="Fax"
                        // onChange={handleInputChange}
                        // value={values.d_period}
                        name="fax"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 ">
                  <button
                    className="btn btn-block btn-success btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                  >
                    {/* {props.domain_regiseter_loading ? <Spinner /> : "Register"} */}
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
