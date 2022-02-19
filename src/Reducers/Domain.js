import {
  DOMAIN_AVAILABLE,
  DOMAIN_REGISTER_LOADING,
  REGISTER_DOMAIN_FAIL,
  DOMAIN_REGISTER_SUCCESS,
  DOMAIN_DETAIL_ISLOADING,
  DOMAIN_DETAIL_SUCCESS,
  DOMAIN_DETAIL_FAIL,
} from "../Actions/types";
const initialState = {
  domain_available: null,
  domain_register_success: false,
  domain_registered: null,
  domain_regiseter_loading: false,
  domain_detail_loading: false,
  domain_detail: null,
  domain_register_error: null,
};
export default function Domain(state = initialState, action) {
  switch (action.type) {
    case DOMAIN_AVAILABLE:
      return {
        ...state,
        domain_available: action.payload,
      };
    case DOMAIN_REGISTER_LOADING:
      return {
        domain_regiseter_loading: true,
        domain_loading: true,
      };
    case DOMAIN_REGISTER_SUCCESS:
      return {
        ...state,
        domain_registered: action.payload,
        domain_regiseter_loading: false,
      };
    case REGISTER_DOMAIN_FAIL:
      return {
        ...state,
        domain_register_error: action.payload,
        domain_regiseter_loading: false,
      };
    case DOMAIN_DETAIL_ISLOADING:
      return {
        domain_detail_loading: true,
        domain_loading: true,
      };
    case DOMAIN_DETAIL_SUCCESS:
      return {
        domain_detail: action.payload,
        domain_loading: false,
        domain_detail_loading: false,
      };
    case DOMAIN_DETAIL_FAIL:
      return {
        domain_loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
