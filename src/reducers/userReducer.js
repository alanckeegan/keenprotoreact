import {LOGIN, LOGOUT, CREATE_USER} from '.../actionTypes'


const initialState = {
  user: null
}


const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
    return{
      ...state,
    user: SOMETHINGFORTHISUSER***,
    }
    case LOGOUT:
    return{
      ...state,
    user: null,
    }
    // case CREATE_USER:
    // return{
    //   ...state,
    // user: SOMETHINGFORTHISUSER***,
    // }
  }
}
