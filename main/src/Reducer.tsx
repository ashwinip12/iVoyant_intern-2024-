import { BUY_CAKE ,BUY_ICECREAM,BuyCakeAction,  } from "./Action";

const initialState={
  cake:10,
  icecream:10
};

export const reducer= (state = initialState, action : BuyCakeAction ) => {
switch(action.type){
  case BUY_CAKE:
  return{
  ...state,
  cake:state.cake-1
}
case BUY_ICECREAM:
return{
...state,
icecream:state.icecream+1
}

default:return state;
}
}
