import { UPDATE_VALUES } from "../Actions/action-type";

let initialState = {pid : null}
 

export const myReducer2 = (state=initialState, action) =>{
    console.log("in myreducer 2");
    switch (action.type) {
        case UPDATE_VALUES:
            return {
              ...state,
              pid : action.payload,
            };
        default:
          return state;
    }
}

export default myReducer2;