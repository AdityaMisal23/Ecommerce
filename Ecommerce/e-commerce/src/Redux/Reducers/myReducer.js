
import { UPDATE_VALUES } from "../Actions/action-type";

let initialState = {id:'1', name:'Aditya'}





const reducer = (state=initialState , action) => {
  console.log("inside reducer");
  initialState= {...action.payload}
  console.log("action type "+ action.type);
  switch (action.type) {
    case UPDATE_VALUES:
      const { id, name } = action.payload || {};
      // if (id !== undefined && id !== '' && name !== undefined && name !== '') {
        console.log("inside if "+ id,name);
        return {
          ...state,
          id : id,
          name : name,
        };
      // } else {
      //   console.error('Invalid payload structure for UPDATE_VALUES action');
      //   return state;
      // }

    // handle other cases if needed
    default:
      return state;
  }

  };

export default reducer;