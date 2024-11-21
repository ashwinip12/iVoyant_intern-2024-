import { Provider, useDispatch, useSelector } from 'react-redux';
import {add,remove} from './Action';
import { store } from './store';
import { UserState } from './Reducer';



 const Comp=()=>{
 
  const state=useSelector((state:UserState)=>state);
  const dispatch=useDispatch();
  return(
  <div>
     <p>Count :{state.add}</p>
     <p>Count :{state.remove}</p>
     <button onClick={()=>dispatch(add())}>Add</button>
  <button onClick={()=>dispatch(remove())}>Remove</button>
  </div>
  
  )
  
  }

   const App=()=>{
  return(
  <Provider store={store}>
    <Comp/>
  </Provider>
  )
  }
  export default App;