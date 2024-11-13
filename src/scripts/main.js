'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderSize = 50;
const wallSize = 400;
const offset = (wallSize - spiderSize) / 2;

spider.style.top = `${offset}px`;
spider.style.left = `${offset}px`;
