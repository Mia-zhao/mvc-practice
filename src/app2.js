import "./app2.css";

import $ from 'jquery';

const $tabs = $('#app2 .tabs ul');
const $content = $('#app2 .content ul');

$tabs.on('click', 'li', (e) =>{
  const $li = $(e.currentTarget);
  $li.addClass("active")
    .siblings().removeClass("active");
  $content.children().eq($li.index()).addClass("active")
    .siblings().removeClass("active");
});

$tabs.children().eq(0).trigger('click');