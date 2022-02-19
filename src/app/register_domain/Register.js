import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerDomain } from "../../Actions/domainActions";
import Spinner from "../../components/spinner/Spinner";
const domain = {
  d_name: "",
  d_period: "",
};
export default function Register() {
  const [values, setValue] = React.useState(domain);
  const dispatch = useDispatch();
  const props = useSelector((state) => state.Domain);
  console.log(props);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };
  console.log(values);
  const handleClear = () => {
    setValue(domain);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerDomain(values));
    handleClear();
  };
  let alert;
  if (props.domain_register_error !== null) {
    let msg;
    msg = props.domain_register_error;
    alert = (
      <div
        className="alert alert-error "
        role="alert"
      >
        {msg}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-10 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <h6 className="font-weight-light">Register your Domain here!</h6>
              <form className="pt-8" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="domain_name"
                    placeholder="Domain name"
                    onChange={handleInputChange}
                    value={values.d_name}
                    name="d_name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="domain_period"
                    placeholder="Period"
                    onChange={handleInputChange}
                    value={values.d_period}
                    name="d_period"
                  />
                </div>

                <div className="mt-3">
                  <button
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    type="submit"
                  >
                    {props.domain_regiseter_loading ? <Spinner /> : "Register"}
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
