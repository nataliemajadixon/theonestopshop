// import axios from 'axios';
// import { USER_DETAIL_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../../constants/userConstants';

// // import {
// //     USER_LIST_REQUEST,
// //     USER_LIST_SUCCESS,
// //     USER_LIST_FAIL,
// //     USER_DETAIL_REQUEST,
// //     USER_DETAIL_FAIL,
// //     USER_DETAIL_SUCCESS,
// //     PROFILE_UPDATE_REQUEST,
// //     PROFILE_UPDATE_SUCCESS,
// //     PROFILE_UPDATE_FAIL,
// //     USER_REGISTER_REQUEST,
// //     USER_REGISTER_SUCCESS,
// //     USER_REGISTER_FAIL,
// //     VERIFY_START_REQUEST,
// //     VERIFY_START_SUCCESS,
// //     VERIFY_START_FAIL,
// //     VERIFY_START_RESET,
// //     VERIFYCODE_START_REQUEST,
// //     VERIFYCODE_START_SUCCESS,
// //     VERIFYCODE_START_FAIL,

    
// // } from "../constants/userConstants"

// export const registerUser = (form) => async (dispatch) => {
//     try {
//         dispatch({type: USER_REGISTER_REQUEST})

//         const config = {
//             headers: {
//                 'Content-Type' : 'application/json'
//             }
//         }

//         const { data } = await axios.post('/api/users/register', form, config)

//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: data,
//         })


//     } catch (error) {
//         dispatch({
//             type: USER_DETAIL_FAIL,
//             payload:
//             error.response && error.data.message
//              ? error.response.data.message : error.message,
        
//         })

//     }
// }
