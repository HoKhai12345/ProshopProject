import axios from 'axios'
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
} from '../constants/productConstants'


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
} from '../constants/newsConstants'


export const listProducts = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
    )
    console.log("data",data);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết bóng đá slide
export const listNewsSocerSlide = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: POST_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/news/36?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("data",data);

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết bóng đá bên phải 
export const listNewsSocerRight = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "POST_LIST_REQUEST2" })

    const { data } = await axios.get(
      `/api/news/36?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("data",data);

    dispatch({
      type: "POST_LIST_SUCCESS2",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "POST_LIST_FAIL2",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết giao thông 
export const listNewsTraffic = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "TRAFFIC_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/37?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataTraffic",data);

    dispatch({
      type: "TRAFFIC_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "TRAFFIC_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết ngôi sao
export const listNewsStar = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "STAR_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/39?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataSTAR",data);

    dispatch({
      type: "STAR_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "STAR_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết nấu ăn 
export const listNewsCooking = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "COOKING_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/41?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataCOOKING",data);

    dispatch({
      type: "COOKING_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "COOKING_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết thời trang 
export const listNewsFashion = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "FASHION_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/42?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataFashion",data);

    dispatch({
      type: "FASHION_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "FASHION_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết mạng xã hội
export const listNewsSocialNetwork = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "SOCIAL_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/25?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataSocial",data);

    dispatch({
      type: "SOCIAL_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "SOCIAL_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// post bài viết hài hước 
export const listNewsFunny = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "FUNNY_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/27?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataFunny",data);

    dispatch({
      type: "FUNNY_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "FUNNY_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// post bài viết làm đẹp
export const listNewsBeautify = (keyword = '', limit = '' , offset = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: "BEAUTIFY_LIST_REQUEST" })

    const { data } = await axios.get(
      `/api/news/40?keyword=${keyword}&limit=${limit}&offset=${offset}`
    )
    console.log("dataBeautify",data);

    dispatch({
      type: "BEAUTIFY_LIST_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "BEAUTIFY_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}






export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/products/${id}`, config)

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/products`, {}, config)

    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    )

    dispatch({
      type: PRODUCT_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createProductReview = (productId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/products/${productId}/reviews`, review, config)

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_TOP_REQUEST })

    const { data } = await axios.get(`/api/products/top`)

    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
