
import { BUY_CAKE ,BUY_ICECREAM,BuyCakeAction,  } from "./Action";

// const initialState={
//   cake:10,
//   icecream:10
// };
const buycake={
cake:10
}
const buyicecream=
{
icecream:20
}
// export const reducer= (state = initialState, action : BuyCakeAction ) => {
// switch(action.type){
//   case BUY_CAKE:
//   return{
//   ...state,
//   cake:state.cake-1
// }
// case BUY_ICECREAM:
// return{
// ...state,
// icecream:state.icecream+1
// }

// default:return state;
// }
// }


export const CakeReducer=(state=buycake,action:BuyCakeAction)=>
{
switch(action.type){
  case BUY_CAKE:return{
  ...state,
  cake : state.cake-1
  }

default:return state
}
}
export const IcecreamReducer=(state=buyicecream,action:BuyCakeAction)=>{
 switch(action.type){
 case BUY_ICECREAM:
 return{
 ...state,
 icecream:state.icecream+1
 }
 default:return state
}

}