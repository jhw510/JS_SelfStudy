
$(document).ready(function() {
    'use strict';             //코드를 더 엄격하게 처리하라는 뜻
    paper.install(window);   //전역스코프 설치
    paper.setup(document.getElementById('mainCanvas'));    //pater.js를 캔버스에 연결
    //TODO    실제 코드가 드어갈 자리
    // var c=Shape.Circle(200,200,50); //원 객체를 만들고 객체를 만들기위한 x,y,반지름 매개변수를 받음
    // c.fillColor='green';        //채울색깔(fill)설정 
    // var c;
    // for(var x=35; x<400; x +=50){
    //     for(var y=25;y<400; y+=50){
    //         c = Shape.Circle(x,y,20);
    //         c.fillColor = 'green';
    //     }
    // }

   
    var c=Shape.Circle(200,200,80);  //텍스트의 배경으로 쓸 원을 하나 더 만들었다.
    c.fillColor='black';
    var text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor= 'white';
    text.fontSize= 20;
    text.content ='안녕!';
   
    var tool = new Tool();
    tool.onMouseDown = function(event){
      //  var c= Shape.Circle(event.point.x,event.point.y,20);
      //위의 코드처럼 x,y좌표를 지정하지않고 사용가능,자스는 매개변수를 바탕으로 추론하는 능력이 있다 
      var c= Shape.Circle(event.point,20);  
        c.fillColor = 'green';
    };

    paper.view.draw();      //paper.js가 실제로 화면에서 그리라는 명령어 
  
});


const f=getGreeting;
f( );                   //변수에 할당

const o={};
o.f=getGreeting;
o.f();                //객체프로퍼티에 할당

const arr=[1,2,3];
arr[1]=getGreeting; //arr은 이제 [1,funchtion getGreeting(),2]
arr[1]();            //배열 요소로 할당

function avg(a,b){   //a와 b는 정해진 매개변수라고 한다
  return (a+b)/2;
}

avg(5,10);  //7.5     함수가 호출되어 정해진 매개변수는 값을받아 실제매개변수가 된다
            //실제 매개변수는 함수 바디 안에서만 존재한다

const a=5,b=10;  //변수 a,b는 함수 avg의 매개변수인 a,b와 같은이름이지만 다른 함수이다.
avg(a,b);    


const err = new Error('문제발생!')   //Error인스턴스를 만들면서 에러메세지 지정가능
// 하지만 Error인스턴스를 만드는 것만드로는 아무일이 일어나지 않는다!
// 이 인스턴스는 에러와 통신하는 수단일뿐이다.


const email ="bit@doe.com"

const validatedEmail.


function numbering(){ //함수 선언
  i = 0;
  while(i < 10){
  document.write(i);
  i += 1;
  }
}
numbering(); //함수 호출
  

function 함수명( [인자...[,인자]] ){
    코드
return 반환값
}
    


function get_member(){
  return 'egoing';
  return 'k8805';
  return 'sorialgi';
  }
  alert(get_member());


getGreeting(); //"Hello,World"
getGreeting; //function getGreeting()

  


function getGreeting(){
  return "Hello world";
}
getGreeting(); //Hello world


function f(x){
  colsole.log(`f내부: x=${x}`);
  x=5;
  console.log(`f내부:x=${x} (할당 후)`)
}
let x=3;
console.log(`f를 호출하기 전 :x=${x}`)
f(x);
console.log(`f를 호출한 다음: x=${x}`)

f를 호출하기 전 :x=3
f 내부:x=3
f 내부:x=5(할당 후)
f를 호출한 다음:x=3