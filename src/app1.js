import "./app1.css";

import $ from 'jquery';

const localStorageValName = "app1-operand";
const $operand = $('#operand');

const setVal = (val)=> {
  currentVal = val;
  localStorage.setItem(localStorageValName, val);
  $operand.text(val);
}

let currentVal = parseFloat(localStorage.getItem(localStorageValName) || $operand.text());
setVal(currentVal);

$('#add1').on('click', ()=>{
  setVal(currentVal + 1);
});

$('#subtract1').on('click', ()=>{
  setVal(currentVal - 1);
});

$('#multiply2').on('click', ()=>{
  setVal(currentVal * 2);
});

$('#divide2').on('click', ()=>{
  setVal(currentVal / 2);
});