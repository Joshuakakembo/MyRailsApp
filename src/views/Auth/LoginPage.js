import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    size="lg"
                    className="h-auto align-items-center"
                  />
                  <span
                    className="input-group-tex"
                    onClick={handleShowPassword}
                    style={{
                      cursor: "pointer",
                      marginLeft: "-10%",
                      marginTop: "4%",
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </Form.Group>
                <div className="mt-3">
                  <Link
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    to="/dashboard"
                  >
                    SIGN IN
                  </Link>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  {/* <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div> */}
                  <a
                    href="!#"
                    onClick={(event) => event.preventDefault()}
                    className="auth-link text-black"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i className="mdi mdi-facebook mr-2"></i>Connect using
                    facebook
                  </button>
                </div> */}
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary">
                    Create
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
