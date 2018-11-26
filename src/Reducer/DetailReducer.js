import {ON_SAVE, SHOW_DATA, SHOW_EDIT_DATA, RESET, ON_ERROR_DISPLAY } from '../ActionCreator/ConstantTypes';

export const DetailReducer = (state = {
  i: 0,
  cdetail: [],
  edetail: [],
  msg: '',
  // status: false,
   fetched: false,
}
  , action) => {
  //console.log('main reducer   ', action)

  switch (action.type) {

    case ON_SAVE:
      console.log('reducer onsave', action.payload)
      return ({
        ...state,
        cdetail: action.payload
      });

    case SHOW_DATA:
      console.log('reducer showdata')
      return ({
        ...state,
        cdetail: action.payload,
        fetched: true
      })

    case SHOW_EDIT_DATA:
      console.log('reducer showdata')
      return ({
        ...state,
        edetail: action.payload
      })

    case RESET:
      return ({
        ...state,
        msg: '',
        edetail: []
      //  status: false,
      })

    case ON_ERROR_DISPLAY:
      console.log("ON_ERROR_DISPLAY")
      return ({
        ...state,
        msg: 'No Data available'
      })

    default:
      console.log('   DEFAULT REDUCER', state)
      return state
  }
}