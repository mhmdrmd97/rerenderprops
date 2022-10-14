import React, { useEffect, useState,useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import {toggleOne, toggleTwo, toggleThree, toggleFour} from './counterSlice';


const mapDispatchToProps = (dispatch)=>bindActionCreators({toggleOne, toggleTwo, toggleThree, toggleFour},dispatch);

const dep3 = (state)=>({kidThree:state.kids.three});
const dep2 = (state)=>({kidTwo:state.kids.two});

const customMapStateToProps = (dep,num)=>(state)=>{
  console.log(`map ${num} run`)
return dep(state)
}

const conOwn = (id,dep,fn)=>connect(customMapStateToProps(dep,id),mapDispatchToProps)(fn);


const SubComponents = {
  MyComp: conOwn(3,dep3,({ kidThree, toggleThree }) => {
                        const hToggleThree = ()=>{
                          toggleThree()
                        }
                        const r = useRef(0);
                        useEffect(() => {
                          console.log(`Child 3 renders :`,r.current)
                          r.current += 1;
                        }, [r.current])
                        return (
                          <>
                            <h1>{kidThree}</h1>
                           <button onClick={hToggleThree}>change three</button>
                          </>
                        );
                      }),
  MyCompTwo: conOwn(2,dep2,({ kidTwo, toggleTwo }) => {
                        const hToggleTwo = ()=>{
                          toggleTwo()
                        }
                        const r = useRef(0);
                        useEffect(() => {
                          console.log(`Child 2 renders :`,r.current)
                          r.current += 1;
                        }, [r.current])
                        return (
                          <>
                            <h1>{kidTwo}</h1>
                           <button onClick={hToggleTwo}>change three</button>
                          </>
                        );
                      }),
  
};

function Counter({kidOne,kidTwo,kidFour,toggleOne, toggleTwo, toggleFour}) {
const r = useRef(0)
  useEffect(()=>{
    console.log('parent renders:',r.current);
    r.current += 1;
},[r.current])


  return (
    <div>
        <SubComponents.MyComp />
        <SubComponents.MyCompTwo />

    </div>
  );
}


export default Counter;