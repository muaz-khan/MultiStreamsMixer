// requires: chrome://flags/#enable-experimental-web-platform-features

var videos = [];
var isStopDrawingFrames = false;

var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.style = 'opacity:0;position:absolute;z-index:-1;top: -100000000;left:-1000000000;';
(document.body || document.documentElement).appendChild(canvas);

var options = {};

var self = this;
