import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from "../constants/productConstants";

import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_SUCCESS,
  POST_DELETE_REQUEST,
  POST_DELETE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_CREATE_REVIEW_REQUEST,
  POST_CREATE_REVIEW_SUCCESS,
  POST_CREATE_REVIEW_FAIL,
  POST_TOP_REQUEST,
  POST_TOP_SUCCESS,
  POST_TOP_FAIL,
} from "../constants/newsConstants";

export const listProducts =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      console.log("data", data);

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết bóng đá slide
export const listNewsSocerSlide =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: POST_LIST_REQUEST });

      const { data } = await axios.get(
        `/api/news/36?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("data", data);

      dispatch({
        type: POST_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết bóng đá bên phải
export const listNewsSocerRight =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "POST_LIST_REQUEST2" });

      const { data } = await axios.get(
        `/api/news/36?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("data", data);

      dispatch({
        type: "POST_LIST_SUCCESS2",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POST_LIST_FAIL2",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết giao thông
export const listNewsTraffic =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "TRAFFIC_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/37?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataTraffic", data);

      dispatch({
        type: "TRAFFIC_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TRAFFIC_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết ngôi sao
export const listNewsStar =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "STAR_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/28?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataSTAR", data);

      dispatch({
        type: "STAR_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "STAR_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết nấu ăn
export const listNewsCooking =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "COOKING_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/41?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataCOOKING", data);

      dispatch({
        type: "COOKING_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "COOKING_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết thời trang
export const listNewsFashion =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "FASHION_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/42?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataFashion", data);

      dispatch({
        type: "FASHION_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FASHION_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết mạng xã hội
export const listNewsSocialNetwork =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "SOCIAL_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/25?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataSocial", data);

      dispatch({
        type: "SOCIAL_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "SOCIAL_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết hài hước
export const listNewsFunny =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "FUNNY_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/27?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataFunny", data);

      dispatch({
        type: "FUNNY_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FUNNY_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
// post bài viết làm đẹp
export const listNewsBeautify =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "BEAUTIFY_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/40?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      console.log("dataBeautify", data);

      dispatch({
        type: "BEAUTIFY_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "BEAUTIFY_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết gia đình
export const listNewsFamily =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "FAMILY_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/29?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      dispatch({
        type: "FAMILY_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FAMILY_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết du lịch
export const listNewsTravel =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "TRAVELS_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/178?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      dispatch({
        type: "TRAVELS_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TRAVELS_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// post bài viết Kinh tế
export const listNewsEconomy =
  (keyword = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "ECONOMY_LIST_REQUEST" });

      const { data } = await axios.get(
        `/api/news/44?keyword=${keyword}&limit=${limit}&offset=${offset}`
      );
      dispatch({
        type: "ECONOMY_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ECONOMY_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// lấy bài viết nhiều view
export const listNewsViews = async (
  keyword = "",
  limit = "",
  offset = "",
  result
) => {
  const { data } = await axios.get(
    `/api/news/43?keyword=${keyword}&limit=${limit}&offset=${offset}`
  );
  return result(null, data);
};

// lấy bài viết chi tiết qua slugs
export const newsBySlugs = async (slugs, result) => {
  console.log("SLUGS", slugs);
  const { data } = await axios.get(`/api/news/newsDetail?slug=${slugs}`);
  return result(null, data);
};

// lấy bài viết của từng chuyên mục
export const listNewsByCategory =
  (slugsCategory = "", limit = "", offset = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "NEWS_BY_CATE_REQUEST" });

      const { data } = await axios.get(
        `/api/news/listNews/${slugsCategory}?limit=${limit}&offset=${offset}`
      );
      console.log("dataaaaaaaaaaaaa", data);

      dispatch({
        type: "NEWS_BY_CATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "NEWS_BY_CATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// lấy bài viết của từng chuyên mục nhưng ko dùng redux
export const listNewsByCate = async (
  slugsCategory = "",
  limit = "",
  offset = "",
  result
) => {
  console.log(
    `/api/news/listNews/${slugsCategory}&limit=${limit}&offset=${offset}`
  );
  const { data } = await axios.get(
    `/api/news/listNews/${slugsCategory}?limit=${limit}&offset=${offset}`
  );
  return result(null, data);
};

// lấy bài viết search nhưng ko dùng redux
export const listNewsSearch = async (
  keyword = "",
  limit = "",
  offset = "",
  result
) => {
  console.log(
    `/api/news/search?keyword=${keyword}&limit=${limit}&offset=${offset}`
  );
  const { data } = await axios.get(
    `/api/news/search?keyword=${keyword}&limit=${limit}&offset=${offset}`
  );
  return result(null, data);
};

export const listNewsByCate2 = async (
  slugsCategory = "",
  limit = "",
  offset = ""
) => {
  const { data } = await axios.get(
    `/api/news/listNews/${slugsCategory}?limit=${limit}&offset=${offset}`
  );
  return data;
};

// lấy tổng số bản ghi của từng chuyên mục
export const countCatePost = () => async (dispatch) => {
  try {
    dispatch({ type: "COUNT_POSTCATE_REQUEST" });

    const { data } = await axios.get(`/api/news/countPostCate`);
    dispatch({
      type: "COUNT_POSTCATE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "COUNT_POSTCATE__FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/products`, {}, config);

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProductReview =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: PRODUCT_CREATE_REVIEW_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_CREATE_REVIEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST });

    const { data } = await axios.get(`/api/products/top`);

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
