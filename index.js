
    console.log("Hello World" ,4+6,"another log");
//javascript variable
//what are the veriable --container to store datavalue 
var number1=34;
var number2 =45;
console.log(number1+number2);
//Datatype in javascript

//NUMBER
var num1=34;
var num2=45.11;

//STRING
var str1="hello world";
var str2="Welcome";
  console.log(str1,str2);
//OBJECT
var marks={
    mona:99,
    darshna:89,
    ravi:69.11  
}
console.log(marks);
//Boolean

var a=true;
var b=false;
console.log(a,b);

/*TWO TYPE OF DATATYPE
(1)PRIMITIVE DATATYPE
(2)REFERENCE DATATYPE
*/

var arr=[1,2,"mona",4,5]

function avg(a,b){
    return(a+b)/2;

}
c1=avg(4,6);
c2=avg(14,16);
console.log(c1,c2);


//Array Method
let myarr=["abc","xyz","pqr","def"];
console.log(myarr.length);
myarr.push("rty");
console.log(myarr);

//String Method
 let str="Hello Good Morning good";
 console.log(str.length);
 console.log(str.indexOf("Good"))
console.log(str.indexOf("good"))
console.log(str.slice(0,3))

/*let  Mydate =new Date()
console.log(Mydate)
console.log(Mydate.getDay)
console.log(Mydate.getFullYear())
*/
//DOM manipulatio
  let eme =document.getElementById('click')
console.log(eme)



/*let emeclass1=document.getElementsByClassName("continer")
console.log(emeclass1);

emeclass1[0].style.background="red";
*/

tn=document.getElementsByTagName('button')
console.log(tn);

/*createdElement=document.createElement('p');
createdElement.innerText="this is a para";
tn[0].appendChild(createdElement);

createdElement2=document.createdElement('b');
createdElement2.innerText="this is createa bold";
tn[0].replaceChild(createdElement2,createdElement);
*/


//Selecting using Query

sel=document.querySelector('.container')
console.log(sel);

sel=document.querySelectorAll('.container')
console.log(sel);
function clicked(){
    console.log('This button is click')
}

window.onload=function(){
    console.log('document was loaded ')
}
//Events in javascripts
/*firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>We Have Click/b>"
    console.log("click hua")

})
*/

//Arrow Function

//function sum(a,b){
  //  return a+b;
// }
sum=(a,b)=>{
    return a+b;
}

logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set Interval Fired</b>"
    console.log("i am your log")
}
    //SEt time out and setintval
setTimeout(logkaro,3000);
 
//JAVA SCRIPT LOCALSTROGAGE


//localStorage.getItem('name')
//localStorage.setItem('name','mona')


//JSON
obj={name:"darshna",length:1,a:{this:'tha"t'}}
jso=JSON.stringify(obj)
console.log( typeof jso)
console.log(jso)

parsed=JSON.parse(`{"name":"darshna","length":1,"a":{"this":"that"}}`)
console.log(parsed);

//Templete literes--Backticks
a=34;
console.log(`this is my ${34}`)


