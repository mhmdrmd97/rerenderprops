import React from 'react'

const One = ({ kidOne, toggleOne }) => {
    const hToggleOne = ()=>{  toggleOne() }
    return (
      <>
        <h1>{kidOne}</h1>
       <button onClick={hToggleOne}>change One</button>
      </>
    );
  }
  

export default One