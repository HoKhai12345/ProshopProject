import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_CREATE_RESET,
  POST_CREATE_FAIL,
  POST_CREATE_SUCCESS,
  POST_CREATE_REQUEST,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_RESET,
  POST_CREATE_REVIEW_REQUEST,
  POST_CREATE_REVIEW_SUCCESS,
  POST_CREATE_REVIEW_FAIL,
  POST_CREATE_REVIEW_RESET,
  POST_TOP_REQUEST,
  POST_TOP_SUCCESS,
  POST_TOP_FAIL,
} from "../constants/newsConstants";

export const newsListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: false, news: [] };
    case POST_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const newsListRightReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "POST_LIST_REQUEST2":
      return { loading: false, news: [] };
    case "POST_LIST_SUCCESS2":
      return {
        loading: false,
        newsSockerRight: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "POST_LIST_FAIL2":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListTrafficReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "TRAFFIC_LIST_REQUEST":
      return { loading: false, news: [] };
    case "TRAFFIC_LIST_SUCCESS":
      return {
        loading: false,
        newsTraffic: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "TRAFFIC_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListStarReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "STAR_LIST_REQUEST":
      return { loading: false, news: [] };
    case "STAR_LIST_SUCCESS":
      return {
        loading: false,
        newsStar: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "STAR_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListCookingReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "COOKING_LIST_REQUEST":
      return { loading: false, news: [] };
    case "COOKING_LIST_SUCCESS":
      return {
        loading: false,
        newsCooking: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "COOKING_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListFashionReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "FASHION_LIST_REQUEST":
      return { loading: false, news: [] };
    case "FASHION_LIST_SUCCESS":
      return {
        loading: false,
        newsFashion: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "FASHION_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListFunnyReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "FUNNY_LIST_REQUEST":
      return { loading: false, news: [] };
    case "FUNNY_LIST_SUCCESS":
      return {
        loading: false,
        newsFunny: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "FUNNY_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListSocialReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "SOCIAL_LIST_REQUEST":
      return { loading: false, news: [] };
    case "SOCIAL_LIST_SUCCESS":
      return {
        loading: false,
        newsSocial: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "SOCIAL_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const newsListBeautifyReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "BEAUTIFY_LIST_REQUEST":
      return { loading: false, news: [] };
    case "BEAUTIFY_LIST_SUCCESS":
      return {
        loading: false,
        newsBeautify: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "BEAUTIFY_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListFamilyReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "FAMILY_LIST_REQUEST":
      return { loading: false, news: [] };
    case "FAMILY_LIST_SUCCESS":
      return {
        loading: false,
        newsFamily: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "FAMILY_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListTravelReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "TRAVELS_LIST_REQUEST":
      return { loading: false, news: [] };
    case "TRAVELS_LIST_SUCCESS":
      return {
        loading: false,
        newsTravel: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "TRAVELS_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const newsListEconomyReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "ECONOMY_LIST_REQUEST":
      return { loading: false, news: [] };
    case "ECONOMY_LIST_SUCCESS":
      return {
        loading: false,
        newsEconomy: action.payload.data,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case "ECONOMY_LIST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const countPostCate = (state = { count: [] }, action) => {
  switch (action.type) {
    case "COUNT_POSTCATE_REQUEST":
      return { loading: false, count: [] };
    case "COUNT_POSTCATE_SUCCESS":
      return {
        loading: false,
        count: action.payload.data,
      };
    case "COUNT_POSTCATE__FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listNewBySlugReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case "NEWS_BY_CATE_REQUEST":
      return { loading: true, news: [] };
    case "NEWS_BY_CATE__SUCCESS":
      return { loading: false, news: action.payload };
    case "NEWS_BY_CATE__FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const setInputSearchReducer = (
  state = { checkInput: false },
  action
) => {
  switch (action.type) {
    case "CHECK_INPUT_SUCCESS":
      return { loading: false, checkInput: action.payload };
    default:
      return state;
  }
};

// export const newsListFashionReducer = (state = { news: [] }, action) => {
//   switch (action.type) {
//     case "FASHION_LIST_REQUEST":
//       return { loading: false, news: [] }
//     case "FASHION_LIST_SUCCESS":
//       return {
//         loading: false,
//         newsFashion: action.payload.data,
//         pages: action.payload.pages,
//         page: action.payload.page,
//       }
//     case "FASHION_LIST_FAIL":
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
// export const newsListFashionReducer = (state = { news: [] }, action) => {
//   switch (action.type) {
//     case "FASHION_LIST_REQUEST":
//       return { loading: false, news: [] }
//     case "FASHION_LIST_SUCCESS":
//       return {
//         loading: false,
//         newsFashion: action.payload.data,
//         pages: action.payload.pages,
//         page: action.payload.page,
//       }
//     case "FASHION_LIST_FAIL":
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const productDetailsReducer = (
//   state = { product: { reviews: [] } },
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return { loading: true, ...state }
//     case PRODUCT_DETAILS_SUCCESS:
//       return { loading: false, product: action.payload }
//     case PRODUCT_DETAILS_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const productDeleteReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_DELETE_REQUEST:
//       return { loading: true }
//     case PRODUCT_DELETE_SUCCESS:
//       return { loading: false, success: true }
//     case PRODUCT_DELETE_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const productCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REQUEST:
//       return { loading: true }
//     case PRODUCT_CREATE_SUCCESS:
//       return { loading: false, success: true, product: action.payload }
//     case PRODUCT_CREATE_FAIL:
//       return { loading: false, error: action.payload }
//     case PRODUCT_CREATE_RESET:
//       return {}
//     default:
//       return state
//   }
// }

// export const productUpdateReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case PRODUCT_UPDATE_REQUEST:
//       return { loading: true }
//     case PRODUCT_UPDATE_SUCCESS:
//       return { loading: false, success: true, product: action.payload }
//     case PRODUCT_UPDATE_FAIL:
//       return { loading: false, error: action.payload }
//     case PRODUCT_UPDATE_RESET:
//       return { product: {} }
//     default:
//       return state
//   }
// }

// export const productReviewCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case PRODUCT_CREATE_REVIEW_REQUEST:
//       return { loading: true }
//     case PRODUCT_CREATE_REVIEW_SUCCESS:
//       return { loading: false, success: true }
//     case PRODUCT_CREATE_REVIEW_FAIL:
//       return { loading: false, error: action.payload }
//     case PRODUCT_CREATE_REVIEW_RESET:
//       return {}
//     default:
//       return state
//   }
// }

// export const productTopRatedReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case PRODUCT_TOP_REQUEST:
//       return { loading: true, products: [] }
//     case PRODUCT_TOP_SUCCESS:
//       return { loading: false, products: action.payload }
//     case PRODUCT_TOP_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
