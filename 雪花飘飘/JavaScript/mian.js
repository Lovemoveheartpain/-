// // // // //字面量方式创建对象
// // // // /*
// // // // 对象中的this指针指向对象本身
// // // // */
// // // // // var addition = {
// // // // //   firstNum: 0,
// // // // //   secondNum: 0,
// // // // //   result: 0,
// // // // //   add: function add(){
// // // // //     console.log( this.result = this.firstNum+this.secondNum);
// // // // //   }
// // // // // }

// // // // // addition.firstNum = 3;
// // // // // addition.secondNum = 6;
// // // // // addition.add();


// // // // // 构造函数创建对象

// // // // // var addition = new Object();
// // // // // addition.firstNum = 2;
// // // // // addition.secondNum = 2;

// // // // // addition.add = function(){
// // // // //   return this.firstNum + this.secondNum;
// // // // // }

// // // // // console.log(addition.add());

// // // // /*
// // // // 设计一个对像 有三个属性 姓名 班级 学号
// // // //      三个行为： 输出 班级 学号 学生XX在学习
// // // //                            学生在上课
// // // //                            在休息

// // // // */

// // // // var student = {
// // // //   name: '',
// // // //   class: '',
// // // //   id: 0,

// // // //   study: function study(){
// // // //     console.log(this.name+'在'+this.class+'学习');
// // // //   },

// // // //   attendClass: function attendClass(){
// // // //     console.log(this.name+'在'+this.class+'上课');
// // // //   }
// // // // }
// // // // student.name = '刘萍';
// // // // student.class = '1904A';
// // // // student.study();


// // // function Person(name, age, eat){
// // //   this.name = name;
// // //   this.age = age;
// // //   this.eat = eat;
// // // }

// // // Person()


// // // // Person();

// // // var person = new Person('刘萍', 2, function eat(){console.log('我是刘萍，我会吃')});

// // // // console.log(person);

// // // // function eat(){
// // // //   console.log('我是王凯 我更会吃');
// // // // }

// // // // eat();

// // // function Computer(color, type, price){
// // //   this.color = color;
// // //   this.type = type;
// // //   this.price = price;
// // // }

// // // var computer = new Computer('black','acer',18000);

// // // console.log(computer);


// // // function cup(color, size,price){
// // //   var tempCup = new Object();
// // //   tempCup.color = color;
// // //   tempCup.size = size;
// // //   tempCup.price = price;
// // //   return tempCup;
// // // }

// // // var cup1 = cup('pink', 10000, 10000);
// // // console.log(cup1);

// // // // function ball(color, size, point){
// // // //   var ballArray = new Array()
// // // //    for(index=0; index< 100; index++){
// // // //      var tempBall = new Object();
// // // //      tempBall.color = color;
// // // //      tempBall.size = size;
// // // //      tempBall.point = point;
// // // //      ballArray.push(tempBall);
// // // //    }
// // // //    return ballArray;
// // // // }

// // // // var balls = ball('red',100,100);
// // // // console.log(balls);

// // // // function cupFactory(color, size, price,  count){
// // // //   var cupArray = new Array();
// // // //   for(index = 0; index < count; index++){
// // // //     var cup = new Object();
// // // //     cup.color = color;
// // // //     cup.size = size;
// // // //     cup.price = price;
// // // //     cupArray.push(cup);
// // // //   }
// // // //   return cupArray;
// // // // }

// // // // var cupCar = cupFactory('pink',10000,10000,200);
// // // // console.log(cupCar);



// // // function Cup(size, color){
// // //   var price = 10;
// // //   this.price = price;
// // //   this.size = size;
// // //   this.color = color;

// // //   this.changePrice = function(price){
// // //     this.price = price;
// // //   }
// // // }

// // // var cup = new Cup(1000, 'pink');
// // // console.log(cup);
// // // cup.changePrice(11);
// // // console.log(cup);

// // // // delete(cup.color);
// // // console.log(cup);

// // // cup.wangkai = '王凯是个xxxz';


// // // cup.color = 'green';
// // // console.log(cup);


// // // console.log(cup.price);


// // //圆形的创建

// // function Circle(size, color, point){
// //   this.size = size;
// //   this.color = color;
// //   this.point = point;
// // }

// // function Color(r,g,b){
// //   this.r = r;
// //   this.g = g;
// //   this.b = b;
// // }

// // function Size(width, height){
// //   this.width = width;
// //   this.height = height;
// // }


// // function Point(left, top){
// //   this.top = top;
// //   this.left = left;
// // }

// // for(index = 0; index < 100; index++){

// // var randomLeft = parseInt(Math.random()*800);
// // var randomTop = parseInt(Math.random()*800);
// // var point = new Point(randomLeft, randomTop);


// // var randomWidth = parseInt(Math.random()*200);
// // var size = new Size(randomWidth,randomWidth);


// // var randomR = parseInt(Math.random()*256);
// // var randomG = parseInt(Math.random()*256);
// // var randomB = parseInt(Math.random()*256);
// // var color = new Color(randomR,randomG,randomB);


// // var circle = new Circle(size,color,point);


// // var circleDiv = document.createElement('div');
// // circleDiv.style.width = circle.size.width+'px';
// // circleDiv.style.height = circle.size.height+'px';
// // circleDiv.style.left = circle.point.left+'px';
// // circleDiv.style.top = circle.point.top+'px';
// // // circleDiv.style.border = '1px solid black';
// // circleDiv.style.position = 'absolute';
// // circleDiv.style.backgroundColor = 'rgb('+circle.color.r+','+circle.color.g+','+circle.color.b+')';

// // circleDiv.style.borderRadius = '50%';

// // var b = document.getElementById('body');
// // b.style.position = 'relative';

// // b.appendChild(circleDiv);

// // }


// function colorFactory(r, g, b){
//   var colorObject = new Object();
//   colorObject.r = r;
//   colorObject.g = g;
//   colorObject.b = b;
//   return colorObject;
// }


// function sizeFactory(width, height){
//   var sizeObject = new Object();
//   sizeObject.width = width;
//   sizeObject.height = height;
//   return sizeObject;
// }

// function pointFactory(left, top){
//   var pointObject = new Object();
//   pointObject.left = left;
//   pointObject.top = top;
//   return pointObject;
// }

// function circleFactory(color, size, point){
//   var circleObject = new Object();
//   circleObject.color = color;
//   circleObject.size = size;
//   circleObject.point = point;
//   return circleObject;
// }


// for(index = 0; index < 100; index++){

// var randomR = parseInt(Math.random()*256);
// var randomG = parseInt(Math.random()*256);
// var randomB = parseInt(Math.random()*256);

// var color = colorFactory(randomR,randomG,randomB);

// var randomWidth = parseInt(Math.random()*100);
// var size = sizeFactory(randomWidth,randomWidth);

// var randomLeft = parseInt(Math.random()*800);
// var randomTop = parseInt(Math.random()*400);

// var point = pointFactory(randomLeft,randomTop);

// var circle = circleFactory(color, size, point);


// var circleDiv = document.createElement('div');
// circleDiv.style.width = circle.size.width+'px';
// circleDiv.style.height = circle.size.height+'px';
// circleDiv.style.left = circle.point.left+'px';
// circleDiv.style.top = circle.point.top+'px';
// // circleDiv.style.border = '1px solid black';
// circleDiv.style.position = 'absolute';
// circleDiv.style.backgroundColor = 'rgb('+circle.color.r+','+circle.color.g+','+circle.color.b+')';

// circleDiv.style.borderRadius = '50%';

// var b = document.getElementById('body');
// b.style.position = 'relative';

// b.appendChild(circleDiv);

// }



// for (const key in circle) {
//   console.log(key);
//   console.log(circle[key]);
// }


