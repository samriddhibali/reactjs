import {ON_VALIDATE, ON_VALIDATE_ERROR, VALID_SIGNUP, ON_VALIDATE_SIGNUP_ERROR } from '../ActionCreator/ConstantTypes';

export const LoginReducer = (state = {
    msg: '',
    status: false,
    newUser: false,
  },
  action) => {
   // console.log("Login Reducer   " , action)
    switch(action.type) {
  
      case ON_VALIDATE:
        console.log('VALIDATE-----------')
        return ({
          ...state,
          msg: 'Successfully Logged in',
          status: true,
        })
  
        case ON_VALIDATE_ERROR:
        console.log("ON_VALIDATE_ERROR ----------- ")
        return ({
          ...state,
          msg: 'Username or password wrong...',
          status: false,
        })
  
        case VALID_SIGNUP:
        console.log('VALIDATESIGNUP -----------')
        return ({
          ...state,
          newUser: true,
        })
  
        case ON_VALIDATE_SIGNUP_ERROR:
        console.log("ON_VALIDATE_SIGNUP_ERROR ----------- ")
        return ({
          ...state,
          status: false,
          newUser: false
        })
  
      default:
        return state
    }
  }