// import { checkGetDomainAvailability, register_Domain } from "../Api/Api";
import axios from "axios";
import { apiToken } from "../Api/Api";
import {
  DOMAIN_AVAILABLE,
  DOMAIN_DETAIL_SUCCESS,
  DOMAIN_DETAIL_ISLOADING,
  DOMAIN_ERROR,
  DOMAIN_LOADING,
  DOMAIN_REGISTER_LOADING,
  DOMAIN_REGISTER_SUCCESS,
  REGISTER_DOMAIN_FAIL,
  DOMAIN_DETAIL_FAIL,
} from "./types";
// export const base_url = "http://sandbox.newregistry.co.ug/api/v2";
const api = axios.create({
  baseURL: " http://sandbox.newregistry.co.ug/api/v2",
});
export const getDomain = () => async (dispatch) => {};
// const { REACT_APP_API_KEY } = process.env;
// console.log(REACT_APP_API_KEY);
export const registerDomain = (values) => async (dispatch) => {
  dispatch({
    type: DOMAIN_REGISTER_LOADING,
  });
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  const body = JSON.stringify(values);
  console.log(body);
  api
    .post("/domains/register", body, apiToken(process.env.REACT_APP_API_KEY))
    .then((res) => {
      dispatch({
        type: DOMAIN_REGISTER_SUCCESS,
        payload: res.data,
      });
      console.log(process.env.REACT_APP_API_KEY)
    })
    .catch((err) => {
      if (err) {
        dispatch({
          type: REGISTER_DOMAIN_FAIL,
          payload: err.message,
        });
      }
    });
};

export const detailDomain = (term) => async (dispatch) => {
  dispatch({
    type: DOMAIN_DETAIL_ISLOADING,
  });
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  const body = JSON.stringify(term);
  console.log(body);
  api
    .get(
      "/domains/whois",
      body
      // apiToken(process.env.REACT_APP_API_KEY)
    )
    .then((res) => {
      dispatch({
        type: DOMAIN_DETAIL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err) {
        dispatch({
          type: DOMAIN_DETAIL_FAIL,
          payload: err.message,
        });
      }
    });
};
