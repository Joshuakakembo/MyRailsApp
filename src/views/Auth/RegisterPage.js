import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [nextPage, setNextPage] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleNextPage = () => {
    setNextPage(!nextPage);
  };
  return (
    <div>
      <div style={{ marginTop: "5%" }} />
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              {/* <div className="brand-logo">
                  <img
                    src={require("../../assets/images/logo.svg")}
                    alt="logo"
                  />
                </div> */}
              <div
                className="text-primary mb-3"
                style={{ fontWeight: "bold", fontSize: 22 }}
              >
                .Ug Registry plugin
              </div>
              <h6 className="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <form className="pt-3">
                {!nextPage ? (
                  <div>
                    <label>First Name</label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Organization</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="organization"
                        placeholder="Organization"
                      />
                    </div>
                    <div className="form-group">
                      <label>Street Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="street_address"
                        placeholder="Street Address"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="mobile"
                        placeholder="Mobile"
                      />
                    </div>
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="postal_code"
                        placeholder="Postal Code"
                      />
                    </div>
                    <div className="form-group">
                      <label>Fax</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="fax"
                        placeholder="Fax"
                      />
                    </div>

                    <div className="form-group">
                      <label>Country</label>
                      <select
                        className="form-control form-control-lg "
                        id="exampleFormControlSelect2"
                        style={{ marginRight: "10px" }}
                      >
                        <option>Country</option>
                        <option>Uganda</option>
                        <option>Outside Country</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <div className="d-flex align-items-center">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control form-control-lg"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                        <span
                          className="input-group-tex"
                          onClick={handleShowPassword}
                          style={{ cursor: "pointer", marginLeft: "-10%" }}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {/* <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>I agree to all Terms &
                      Conditions
                    </label>
                  </div>
                </div> */}
                <div className="mt-3">
                  {!nextPage ? (
                    <button
                      className="btn btn-primary btn-lg btn-circle btn-sm margin-auto"
                      type="button"
                      onClick={handleNextPage}
                      style={{
                        borderRadius: "50%",
                        margin: "auto",
                        marginLeft: "45%",
                      }}
                    >
                      next
                    </button>
                  ) : (
                    <div>
                      <button
                        className="btn btn-primary btn-lg btn-circle btn-sm"
                        type="button"
                        onClick={handleNextPage}
                        style={{
                          borderRadius: "50%",
                          margin: "auto",
                          marginBottom: "10px",
                          marginLeft: "45%",
                        }}
                      >
                        back
                      </button>
                      <button
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        to="/dashboard"
                      >
                        SIGN UP
                      </button>
                    </div>
                  )}
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
