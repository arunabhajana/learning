import React from 'react'

export const Comp2 = ({count, onClickHandler}) => {
  return (
    <div>
        <h2>Component 2</h2>
        <p>{count}</p>
        <button onClick={onClickHandler}>Click</button>
    </div>
  )
}
