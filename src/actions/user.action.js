import { userConstants } from "./constants";
import axios from "../helpers/axios";
import { toast } from "react-toastify";

export const signup = (user) => {
  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios
      .post(`/admin/signup`, {
        ...user,
      })
      .then((res) => {
        if (res.status === 201) {
          const { message } = res.data;
          dispatch({
            type: userConstants.USER_REGISTER_SUCCESS,
            payload: {
              message,
            },
          });
        } else {
          if (res.status === 400 || !res) {
            dispatch({
              type: userConstants.USER_REGISTER_FAILURE,
              payload: { error: res.data.error },
            });
          }
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Something Want Wrong...!", { autoClose: 2000 });
        }
      });
  };
};
