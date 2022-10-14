import React from 'react'

const Two = ({ kidTwo, toggleTwo }) => {
    const hToggleTwo = ()=>{  toggleTwo() }
    return (
      <>
        <h1>{kidTwo}</h1>
       <button onClick={hToggleTwo}>change three</button>
      </>
    );
  }


export default Two