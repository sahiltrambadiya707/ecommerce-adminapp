import { authConstants } from "../actions/constants";
import { toast } from "react-toastify";

const initState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
  toast: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        toast: toast.success("login successfully...!", { autoClose: 2000 }),
      };
      break;
    case authConstants.LOGIN_FAILURE:
      state = {
        ...state,
        error: true,
        toast: toast.error("login failure", { autoClose: 2000 }),
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initState,
        toast: toast.success("logout successfully...!", { autoClose: 2000 }),
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
        toast: toast.error("logout failure", { autoClose: 2000 }),
      };
      break;
    case authConstants.AUTO_LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.AUTO_LOGIN_FAILURE:
      state = {
        ...state,
        error: true,
      };
      break;
  }

  return state;
};
