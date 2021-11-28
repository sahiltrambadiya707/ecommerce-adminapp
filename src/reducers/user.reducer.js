import { userConstants } from "../actions/constants";
import { toast } from "react-toastify";

const initState = {
  error: null,
  message: "",
  loading: false,
  toast: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
      };
      break;
    case userConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        toast: toast.success("Register successfully...!", { autoClose: 2000 }),
      };
      break;
    case userConstants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        toast: toast.error("Register Failure", { autoClose: 2000 }),
      };
      break;
  }
  return state;
};
