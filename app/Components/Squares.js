import React from 'react';
const Squares = ({ value,onSquareClick })=>{
  return(
         <button className='square' onClick={onSquareClick}>{value}</button>
    )
};
export default Squares;