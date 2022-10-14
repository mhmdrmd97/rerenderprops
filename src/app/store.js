import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

//custom map state to props
const customMapStateToProps = (dep)=>(state)=>dep(state)

//custom map dispatch to props
const customMapDispatchToProps = (actions)=>(dispatch)=>bindActionCreators(actions,dispatch);

//conOwn(dep,component)
export const conOwn = (dep,actions,comp)=>connect(customMapStateToProps(dep),customMapDispatchToProps(actions))(comp);


//store
export const store = configureStore({
  reducer: {
    kids: counterReducer,
  },
});
