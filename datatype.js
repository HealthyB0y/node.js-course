"use strict";

var age = 10;
const pi = 3.14158;

console.log(typeof pi);

if(parseInt(age)){
    console.log("Age is number");
}

var myage= "AAA";
var myage2=parseInt(myage);


//Boolean[true,false]
var nodejs_slow=false;
var iojs_fast =true;
if(nodejs_slow)
{
    console.log("Node.js is slow");
} else
{
    console.log("Node.js is fast");
}

if(!nodejs_slow){
    console.log("Node.js is not slow");
}

//string
var best_film="Gone with the wind";
var best_hero='Bat man';
var best_player ='Bjork\'ka';

console.log(best_player);

var my_folder ="/Volumes/MacBackup/Data/";
console.log(my_folder);

//Object
var cuong = {firstname: "Trinh", lastname:"Cuong"};
var book = {name:"Java cookbook", author: cuong};
console.log(book.name);
console.log(book.price);
book.price = 100;
console.log(book.price);
console.log(book.author);
cuong.firstname = "Trinhj";
console.log(book.author);
console.log(cuong["firstname"]);

var player='B\'jorka';
console.log(player);
console.log(typeof player);


