const accountReducer = (state = {accounts:[], id: null, username: '', is_LoggedIn:false},  action)=>{
  switch(action.type){

    case "ADD_ACCOUNT":
      return{
        ...state,
        accounts: action.account
      }
    case "SET_CURRENT_ACCOUNT":
      return action.account
    case "FETCH_ACCOUNT":
    return{
      is_LoggedIn:true,
      id: action.account.id,
      username: action.account.attributes.username,
    }
    case "LOGOUT_ACCOUNT":
    return{
      is_LoggedIn: false,
      id: null ,
      username: '',
    }
    default:
    return state

  }
}
export default accountReducer
