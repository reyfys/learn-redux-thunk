import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  dataUser: dataReducer,
  //dataUser : dataReducer >> ini gunanya untuk rename si dataReducer jadi dataUser
});

export default rootReducer;
