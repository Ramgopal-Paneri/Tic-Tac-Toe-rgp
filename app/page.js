"use client";
import { useState } from 'react';
import React from 'react';
import Squares from './Components/Squares';
const page = () =>{
const [nextTurnIsX,SetTurn]=useState(true);
  const [squares,setSquare]=useState(Array(9).fill(''));
  const [p1,setp1] = useState(null);
  const [p2,setp2] = useState(null);
const [count,setCount]=useState(0);
  const handleClick=(i)=>{
  if(squares[i] || findWinner(squares)){
    return;
    }
  //copying squares values
  const updateSquare = squares.slice();
if(nextTurnIsX){updateSquare[i]='X';}else{updateSquare[i]='O';}
SetTurn(!nextTurnIsX);
setSquare(updateSquare);
setCount(count+1)
};
let status;
let winner = findWinner(squares);
if (winner) {
  if(winner==='X'){
    winner=p1 ? p1 : 'X';
    }else if(winner==='O'){
      winner=p2 ? p2 : 'O';
    }
  status = 'Winner: ' + winner;}
else {
if((count-1==8) && (winner!=='X' &&  winner!=='O')){
status='No winner! rematch suggested';
}else{
    status = 'Next player: ' + (nextTurnIsX ?  'X' :'O');
}}
function read(e){
  if(e.target.id=='f1'){
 setp1(e.target.value);   
}
  if(e.target.id=='f2'){
    setp2(e.target.value);   
     }
}
const nameChange=(e)=>{
  if(e.key==='Enter'){
    const but = document.createElement('button');
    but.textContent="Edit Name";
    const parent = e.target.parentElement;
const input = e.target;
    parent.replaceChild(but,input);
    but.addEventListener('click',(e)=>{
      if(e.target.textContent=="Edit Name"){
        parent.replaceChild(input,but);
      }
    });
  }
};
const clearBoard=(()=>{
  setSquare(Array(9).fill(''));
let winSquares = document.getElementsByClassName('win');
Array.from(winSquares).forEach(x=>{
  x.classList.remove('win');
})
SetTurn(true);
setCount(0);
});
const clearAll=(()=>{
  setSquare(Array(9).fill(''));
  setp1(null);
  setp2(null); 
let inputs=document.getElementsByTagName('input');
Array.from(inputs).forEach(x=>{
x.value=null;
});
let winSquares = document.getElementsByClassName('win');
Array.from(winSquares).forEach(x=>{
  x.classList.remove('win');
})
SetTurn(true);
setCount(0);
})
return (
   <>
   <div id='take'>
    <div className='inputs'>
player 1 : <input type='text' id='f1' pattern='[A-Zz-a]{18}' autoFocus={true} placeholder='Enter name (player 1)' maxLength={18} onChange={(e)=>{read(e)}} onKeyDownCapture={(e)=>{nameChange(e)}}></input>
<h3 id='left'>{p1 ? p1 : "Player 1" }  (X)</h3>
</div>
<div className='inputs'>
player 2 : <input type='text' id='f2' pattern='[A-Zz-a]{18}' autoFocus={true} placeholder='Enter name (player 2)' maxLength={18} onChange={(e)=>{read(e)}}  onKeyDownCapture={(e)=>{nameChange(e)}}></input>
<h3 id='right'>{p2 ? p2 : "Player 2" } (O)</h3>
</div>
</div>
<div id='statusDiv'><h4 id='status'>{status}</h4></div>
<div className='board'>
       <h2>TIC TAC TOE</h2>
   <div><Squares value={squares[0]} onSquareClick={()=> handleClick(0)}/>
   <Squares value={squares[1]} onSquareClick={()=> handleClick(1)}/>
   <Squares value={squares[2]} onSquareClick={()=> handleClick(2)}/>
   </div>
   <div><Squares value={squares[3]} onSquareClick={()=> handleClick(3)}/>
   <Squares value={squares[4]} onSquareClick={()=> handleClick(4)}/>
   <Squares value={squares[5]} onSquareClick={()=> handleClick(5)}/>
   </div>
   <div><Squares value={squares[6]} onSquareClick={()=> handleClick(6)}/>
   <Squares value={squares[7]} onSquareClick={()=> handleClick(7)}/>
   <Squares value={squares[8]} onSquareClick={()=> handleClick(8)}/>
   </div>
   </div>
   <div id='clear'><button onClick={clearBoard}>Clear Board</button><button onClick={clearAll}>Clear All</button></div>
   </> 
  )
}
const findWinner=(squares)=>{
  const winPoints=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];
  for (let index = 0; index < winPoints.length; index++) {
  const [a,b,c]=winPoints[index];
    if(squares[a] && squares[a] === squares[b]  && squares[a] === squares[c]){
  showWin(a,b);
      return squares[a];
    }
  }
  return;
};
const showWin=(a,b)=>{
const winPoints=[
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const buttons = document.getElementsByClassName('square');
var colorB =  Array.from(buttons);
for (let index = 0; index < winPoints.length; index++) {
const [x,y]=winPoints[index];
if(x===a && y===b){
  var [one,two,three]=winPoints[index];
  colorB[one].classList.add('win');
  colorB[two].classList.add('win');
  colorB[three].classList.add('win');
  break;
}
  }
};
export default page;