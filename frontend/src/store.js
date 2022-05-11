import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,

} from './reducers/productReducers'
import {
  newsListReducer,
  newsListRightReducer,
  newsListTrafficReducer,
  newsListStarReducer,
  newsListCookingReducer,
  newsListFashionReducer,
  newsListFunnyReducer,
  newsListSocialReducer,
  newsListBeautifyReducer,
  newsListEconomyReducer,
  newsListFamilyReducer,
  newsListTravelReducer,
  countPostCate
} from './reducers/newsReducers'
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from './reducers/orderReducers'
import { listNewsEconomy, listNewsFamily, listNewsTravel } from './actions/productActions'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  listNewsSocerSlide: newsListReducer,
  listNewsSocerRight: newsListRightReducer,
  listNewsTraffic: newsListTrafficReducer,
  listNewsStar: newsListStarReducer,
  listNewsCooking: newsListCookingReducer,
  listNewsFashion: newsListFashionReducer,
  listNewsFunny: newsListFunnyReducer,
  listNewsSocial: newsListSocialReducer,
  listNewsBeautify: newsListBeautifyReducer,
  listNewsFamily: newsListFamilyReducer,
  listNewsTravel: newsListTravelReducer,
  listNewsEconomy: newsListEconomyReducer,
  countNewsPostCate:countPostCate
   
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
