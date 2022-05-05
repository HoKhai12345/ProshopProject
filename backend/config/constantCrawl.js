// module.exports = {
//     ERROR: {
//       SUCCESS: {
//         ec: 0,
//         message: "SUCCESS",
//       },
//       FAIL: {
//         ec: 1,
//         message: "FAIL",
//       },
  
//       // OTHER GROUP
//       IP_NOT_ALLOW: {
//         ec: 90,
//         message: "IP_NOT_ALLOW",
//       },
//       WRONG_HASH: {
//         ec: 91,
//         message: "WRONG_HASH",
//       },
//       USER_NOT_EXIST: {
//         ec: 92,
//         message: "USER_NOT_EXIST",
//       },
//       PARTNER_NOT_FOUND: {
//         ec: 93,
//         message: "PARTNER_NOT_FOUND",
//       },
//       INVALID_PARAMS: {
//         ec: 400,
//         message: "INVALID_PARAMS",
//       },
//       INVALID_MONEY: {
//         ec: 401,
//         message: "INVALID_MONEY",
//       },
//       INVALID_METHOD: {
//         ec: 402,
//         message: "INVALID_METHOD",
//       },
//       REQUEST_TIMEOUT: {
//         ec: 408,
//         message: "REQUEST_TIMEOUT",
//       },
//       REQUEST_ERROR: {
//         ec: 409,
//         message: "REQUEST_ERROR",
//       },
//       SYSTEM_ERROR: {
//         ec: 9999,
//         message: "SYSTEM_ERROR",
//       },
//     },
//   };

  const constant =  () => {
    return {
            'sohaSocker' : {
                "url" : "https://soha.vn/"
            },
            'vnexpress':{
                "url" : "https://vnexpress.vn/"
            }
            
           }
  }
   export default constant