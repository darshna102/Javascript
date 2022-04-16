// console.log("hello world");


// vbr _myname="mona"
// console.log(_myname)

// let n=12.3
// console.log(typeof(n)
// );
// console.log(10+"20");
// console.log(9-"5");
//diferent between null and undefined
// var iAmusless=null;
// console.log(iAmusless);

// var iAmusless;
// console.log(iAmusless);

//increment
// var num=15;
// var Newnum=num++;
// console.log(num);
// console.log(Newnum);


// var num=15;
// var Newnum=++num;
// console.log(num);
// console.log(Newnum);

// var num=15;
// var Newnum=--num +5;    //14+5=19
// console.log(num);
// console.log(Newnum);


// var a=30;
// var b=10;
// console.log(a==b);



//swap to number
// var a=10;
// var b=20;
// var c=b;
// b=a;
// a=c;
// console.log("value of a " + a)
// console.log("value of b " + b)


// var a=10;
// var b=20;

// a=a+b;//30
// b=a-b;//10
// a=a-b;//20

// console.log("value of a " + a)
// console.log("value of b " + b)


// var num1=5;
// var num2='5';
// console.log(num1===num2);

//if else

// var year=2020;

// if(year%4===0){
// if(year%100===0){
// if(year%400===0){
//     console.log("the year"+year+ "is leep year");
//     }
//     else{
//         console.log("the year not a leep year");
//      }
//      console.log("the year"+year+ "is leep year");
//     }
//     else{
  
//     }
//     console.log("the year"+year+ "is leep year");
//     }
//     else{
//         console.log("the year not a leep year");
//     }
//while loop
// var num=0;
// while(num<=100)


// {
//     console.log(num);
//     num++;
// }

//do whileloop
// var num=0;
// do{ console.log(num);
//          num++;
// }while(num<=10);

// for(var num=0;num<=10;num++){
//     console.log(num);
// }




// for(var num=1;num<=10; num++)
// {
//     var num1=8;
//     console.log(num1 + " * " + num + " = " + num1 * num);
// }

//FUNCTION
// function sum(){
//     var a =10,b=20;
//     var total=a+b;
//      console.log(total);
// }

// sum();

// var funExp=function(a,b){
//     return total=a+b;

// }
//  var sum=funExp(18,16);
//  console.log('the sum is two number is' + sum);  


//  function biodata(){
//      let myfirstname="darshna";
//      console.log(myfirstname);
//      if(true)
//      {
//          let mylastname="gadhiya";
//          console.log('inner ' + myfirstname);
//          console.log('inner ' + mylastname);
//      }
//      console.log('innerouter ' + mylastname);
//  }
//  biodata();
 

//temlate litresls

// for(let num=1; num<=10; num++){
//     let num1=12;
//     // console.log(num1 + " * " + num + " = " + num1 * num);
//     console.log( `${num1} * ${num} =${num1 * num}`);
// }

//Arrow function
// const sum=()=>{`the sum of the number is ${(a=5)+(b=5)}`;
// }

// console.log(sum());

//ARRAY

// var myfriends=['devu','niki','nivu'];
// console.log(myfriends[myfriends.length-1]);

// console.log(myfriends.length);


// var myfriends=['devu','niki','nivu'];
// for (var i=0;i<myfriends.length;i++)
// {
//     console.log(myfriends[i]);
// }

// var myfriends=['devu','niki','nivu'];
// for(let elements in myfriends)
// {
//     console.log(elements);
// }
// for(let elements of  myfriends)
// {
//     console.log(elements);
// }


// var myfriends=['devu','niki','nivu'];
// myfriends.forEach(function(element,index,array){
//     console.log(element+ " index: " + index);

// });

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);

//FILTER()
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

//SORT
// const months = ['March', 'Jan', 'Feb', 'April'];
// months.sort();
// console.log(months);

// const animal=['cat','dog','monkey','cow'];
//  animal.push('chicken');
//  console.log(animal);


//  const animal=['cat','dog','monkey','cow'];
//  animal.pop('cow');
//  console.log(animal);


//SPLICE ()

// const month=['jan','march','april'];
// const newMonth=month.splice(3,0,"Dec");
// console.log(month);


// const month=['jan','march',,'june','april'];
// const indexOfMonth=month.indexOf('march');
// if(indexOfMonth !=-1)
// {
//     const updateMonth=month.splice(indexOfMonth,1,'june');
//     console.log(month);
// }
// else{
//     console.log('No such found data');
// }
// const array1=[1,3,4,6,8];
// let newArr=array1.map((curElm, index,arr)=>{
//     return `index no=${index} and the value is ${curElm} belong to ${arr}`
//    })
// console.log(newArr);

// let arr=[25,36,49,64,81];
// let arrsqr=arr.map((curElem)=>{
//     return Math.sqrt (curElem);
// })

// console.log(arrsqr);

// let arr =[10,6,2];
// let sum=arr.reduce((accumulator,curElem,index,arr)=>{
//     return accumulator*curElem;
// })
// console.log(sum);
 
// var str="apple,kiwi,mango";
// let res=str.slice(0,4);
// console.log(res);


//Example
//display only 280 charecter of a strijg
//  let myTweets="These tutorials will help you understand ASP.NET Core web application step by step. Tutorials are broken down into chapters, where each chapter contains a number of related topics that are packed with easy to understand explanations and real-world example";
// let myActualTweet=myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


//DATE
//  let currDate=new Date();
//  console.log(currDate);

 
//  console.log(new Date());
//  console.log(new Date().toLocaleDateString());

//  console.log(new Date().toString());
//  console.log(Date.now());

// const currDate=new Date();
// console.log(currDate.getDate());
// console.log(currDate.getFullYear());

// const currTime=new Date();
// console.log(currTime.getTime());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// new Date().toLocaleTimeString();
// new Date().toLocaleDateString();
// new Date().toLocaleString();

//MATH

// console.log(Math.PI);
// let num=10.2565;
// console.log(Math.round(num));
// console.log(Math.sqrt (25));
// console.log(Math.abs (-25.89));
// console.log(Math.abs(4-6));
// console.log(Math.ceil(4.53));
// console.log(Math.floor(4.7));
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(-4.9));


// alert(location.href);
// if(confirm("want ti visit a thapa technical")){
//     location.href="https://www.youtube.com/thapatechnical";
// }


//How to access sibling

// document.body.nextElementSibling
// document.body.previousSibling

//How to search the element and reference


//OOP
// let bioData = {
//   myName:"mona",
//   myAge:22,
//   getData:function(){
//       console.log(`my name is${bioData.myName} and my age is${bioData.myAge}`);
//   }
// }
// bioData.getData();


// const obj={
//     myAge:22,
//     myName(){
//         console.log(this.myAge);

//     }

// }
// obj.myName();

// const obj={
//     myAge:22,
//     myName: ()=>{
//         console.log(this);
//     }
// }
// obj.myName();

// const mybioData=['darshna','gadhiya',24];
// let [myFName,myAge,myLName,myDegree="MCA"]=mybioData;
// console.log(myDegree);

//object property
// let myname="darshna";
// const myBio={
//     [myname]:"hello hru?",
//     [10+20]:"is my age"
// }
// console.log(myBio);

// let myName="gadhiya mona";
// let myAge=23;
// const myBio={myName,myAge}
// console.log(myBio);

// //spred oerator
// const color=['red','green','blue'];
// const MyFavColors=[...color, 'yellow','black'];
// console.log(MyFavColors);   

// const message="my name is mona";
// console.log(message);
// console.log(message.padStart(5));
// console.log(myname);

// const person={name:'mona',age:22}
// console.log(Object.values(person));

// let oldNum=Number.MAX_SAFE_INTEGER;
// console.log(oldNum);

// Array.prototype.{flat,flatMap}
// Object.fromEntries()

//CREAT A CALCULATOR
//  const add=(a,b)=>{
// return a+b;
//  }
//  const subs=(a,b)=>{
//  return Math.abs( a-b);
//      }
//      const mult=(a,b)=>{
//     return a*b;
//          }
//     const calculator=(num1,num2,operator) =>{
//     return operator(num1,num2);
// }     

// calculator(4,4,add);
// console.log(calculator(4,4,add));

//Hoisting phase
// var myName;
// console.log(myName);
// myName="mona";


// let a="hello ";
// const first=()=>{
//     let b="how are you ";

//     const second=()=>{
//         let c="hiii i am fine ";
//         console.log(a+b+c);
//     }
//     second();
// }
// first();

// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`the sum is two number is ${sum}`);
//  }
//     innerFun();
// }
// outerFun(10);

//synchronous step by step work

// const fun2=()=>{
//     console.log(`function 2 is call`);
// }
// const fun1=()=>{
//     console.log(`function 1is call`);
//     fun2();
//     console.log(`function 1 is call`);
// }
// fun1();


//ASYNCHROUNS 
// const fun2=()=>{
//     setTimeout(()=>{
//         console.log(`function  2 is call`);
//     },2000);
// }
// const fun1=()=>{
//        console.log(`function 1is call`);
//         fun2();
//         console.log(`function 1 is call`);
//      }

// fun1();

//Currying
//Sum(5)(3)(8)


// const sum=(num1)=>(num2)=>(num3)=> console.log(num1+num2+num3);
// sum(5)(3)(8);

//JSON

//object to json
 var my_object={key_1:"some text",key_2:true,key_3:5};
 var object_as_string=JSON.stringify(my_object);
 console.log(object_as_string);
 typeof(object_as_string);


//json to object
var object_as_string_as_object=JSON.parse(object_as_string);
typeof(object_as_string_as_object);


 



