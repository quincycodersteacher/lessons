var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-50;

var c = canvas.getContext('2d');
c.fillRect(100,100,100,100);
c.fillRect(400,100,100,100);
//c.fillRect(300,300,100,100);