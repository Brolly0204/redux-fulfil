import * as Types from '../action-types'

export default function (state = {users: []}, action) {
  console.log(action);
  switch (action.type) {
    case Types.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          action.user
        ]
      };
    case Types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(item => item !== action.user)
      };
    default:
      return state
  }
}