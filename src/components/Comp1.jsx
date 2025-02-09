import React from 'react'

export const Comp1 = ({count, onClickHandler}) => {


  return (
    <div>
        <h2>Component 1</h2>
        <p>{count}</p>
        <button onClick={onClickHandler}>Click</button>
    </div>
  )
}
