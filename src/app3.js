import "./app3.css";

import $ from 'jquery';

const $rect = $('#app3 #rectangle');

$rect.on('click', ()=>{
  $rect.toggleClass('active');
});