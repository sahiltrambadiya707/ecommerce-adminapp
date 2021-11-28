import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case productConstants.GET_ALL_PRODUCTS_REQUEST:
    //   return {
    //     ...state,
    //   };
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      };
    //   case productConstants.GET_ALL_PRODUCTS_FAILURE:
    //       return{

    //       }
    default:
      return state;
  }
};
