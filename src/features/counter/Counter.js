import React from 'react';
import One from './SubComp/One';
import Two from './SubComp/Two';
import { conOwn } from '../../app/store';
import {toggleOne, toggleTwo, toggleThree, toggleFour} from './counterSlice';

//dependencies
const dep1 = (state)=>({kidOne:state.kids.one});
const dep2 = (state)=>({kidTwo:state.kids.two});

//actions
const actions = {toggleOne, toggleTwo, toggleThree, toggleFour};

//subcomponents wrapped with conOwn
const SubComponents = {
  One: conOwn(dep1,actions,One),
  Two: conOwn(dep2,actions,Two),
};

//main component
function Counter(props) {
  return (
    <div>
        <SubComponents.One />
        <SubComponents.Two />
    </div>
  );
}


export default Counter;