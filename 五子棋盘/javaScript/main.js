var canvas = document.getElementById('canvas');
console.log(canvas)
canvas.width = 1200;
canvas.height = 700;
var context = canvas.getContext('2d');


context.beginPath()
context.strokeStyle = 'black'; 

//X轴
context.moveTo(0,50);
context.lineTo(1200,50);
context.moveTo(0,100);
context.lineTo(1200,100);
context.moveTo(0,150);
context.lineTo(1200,150);
context.moveTo(0,200);
context.lineTo(1200,200);
context.moveTo(0,250);
context.lineTo(1200,250);
context.moveTo(0,300);
context.lineTo(1200,300);
context.moveTo(0,350);
context.lineTo(1200,350);
context.moveTo(0,400);
context.lineTo(1200,400);
context.moveTo(0,450);
context.lineTo(1200,450);
context.moveTo(0,500);
context.lineTo(1200,500);
context.moveTo(0,550);
context.lineTo(1200,550);
context.moveTo(0,600);
context.lineTo(1200,600);
context.moveTo(0,650);
context.lineTo(1200,650);




// 第二波X轴
context.moveTo(0,25);
context.lineTo(1200,25);
context.moveTo(0,75);
context.lineTo(1200,75);
context.moveTo(0,125);
context.lineTo(1200,125);
context.moveTo(0,175);
context.lineTo(1200,175);
context.moveTo(0,225);
context.lineTo(1200,225);
context.moveTo(0,275);
context.lineTo(1200,275);
context.moveTo(0,325);
context.lineTo(1200,325);
context.moveTo(0,375);
context.lineTo(1200,375);
context.moveTo(0,425);
context.lineTo(1200,425);
context.moveTo(0,475);
context.lineTo(1200,475);
context.moveTo(0,525);
context.lineTo(1200,525);
context.moveTo(0,575);
context.lineTo(1200,575);
context.moveTo(0,625);
context.lineTo(1200,625);
context.moveTo(0,675);
context.lineTo(1200,675);




//Y轴
context.moveTo(50,0);
context.lineTo(50,1200);
context.moveTo(100,0);
context.lineTo(100,1200);
context.moveTo(150,0);
context.lineTo(150,1200);
context.moveTo(200,0);
context.lineTo(200,1200);
context.moveTo(250,0);
context.lineTo(250,1200);
context.moveTo(300,0);
context.lineTo(300,1200);
context.moveTo(350,0);
context.lineTo(350,1200);
context.moveTo(400,0);
context.lineTo(400,1200);
context.moveTo(450,0);
context.lineTo(450,1200);
context.moveTo(500,0);
context.lineTo(500,1200);
context.moveTo(550,0);
context.lineTo(550,1200);
context.moveTo(600,0);
context.lineTo(600,1200);
context.moveTo(650,0);
context.lineTo(650,1200);
context.moveTo(700,0);
context.lineTo(700,1200);
context.moveTo(750,0);
context.lineTo(750,1200);
context.moveTo(800,0);
context.lineTo(800,1200);
context.moveTo(850,0);
context.lineTo(850,1200);
context.moveTo(900,0);
context.lineTo(900,1200);
context.moveTo(950,0);
context.lineTo(950,1200);
context.moveTo(1000,0);
context.lineTo(1000,1200);
context.moveTo(1050,0);
context.lineTo(1050,1200);
context.moveTo(1100,0);
context.lineTo(1100,1200);
context.moveTo(1150,0);
context.lineTo(1150,1200);






// 第二波Y轴
context.moveTo(25,0);
context.lineTo(25,1200);
context.moveTo(75,0);
context.lineTo(75,1200);
context.moveTo(125,0);
context.lineTo(125,1200);
context.moveTo(175,0);
context.lineTo(175,1200);
context.moveTo(225,0);
context.lineTo(225,1200);
context.moveTo(275,0);
context.lineTo(275,1200);
context.moveTo(325,0);
context.lineTo(325,1200);
context.moveTo(375,0);
context.lineTo(375,1200);
context.moveTo(425,0);
context.lineTo(425,1200);
context.moveTo(475,0);
context.lineTo(475,1200);
context.moveTo(525,0);
context.lineTo(525,1200);
context.moveTo(575,0);
context.lineTo(575,1200);
context.moveTo(625,0);
context.lineTo(625,1200);
context.moveTo(675,0);
context.lineTo(675,1200);
context.moveTo(725,0);
context.lineTo(725,1200);
context.moveTo(775,0);
context.lineTo(775,1200);
context.moveTo(825,0);
context.lineTo(825,1200);
context.moveTo(875,0);
context.lineTo(875,1200);
context.moveTo(925,0);
context.lineTo(925,1200);
context.moveTo(975,0);
context.lineTo(975,1200);
context.moveTo(1025,0);
context.lineTo(1025,1200);
context.moveTo(1075,0);
context.lineTo(1075,1200);
context.moveTo(1125,0);
context.lineTo(1125,1200);
context.moveTo(1175,0);
context.lineTo(1175,1200);




context.stroke();
context.closePath()




var array = [];



$(document).mousedown(function(event){
    var startX = event.pageX - $('.big').offset().left;
    var startY = event.pageY - $('.big').offset().top;
    // console.log(startX);
    // console.log(startY);
    // console.log(startX%25);
    // console.log(startY%25);
    if(startX%25 == 0 || startY%25 == 0){
        context.beginPath();
        context.moveTo(startX,startY);
        context.beginPath();
        $('.font1').click(function(){
            context.fillStyle = 'black'
        });
        $('.font2').click(function(){
            context.fillStyle = 'lightgrey'
        });
        context.arc(startX,startY,12,Math.PI*2,Math.PI*0,true);

        array.push([startX,startY,12,Math.PI*2,Math.PI*0,true]);
        console.log(array)
        context.fill();
        context.closePath();
        context.save();
    }
})


