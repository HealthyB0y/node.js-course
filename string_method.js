var quotes = "Darkness cannot drive out darkness;" +
    "only light can do that. " + "Hate cannot drive out hate; " +
    "only love can do that." ;
console.log(quotes);
var firstPost = quotes.indexOf("only");
//vị trí đầu tiên indexOf là tìm từ đầu
var lastPost = quotes.lastIndexOf("only");
//lastPost là tìm từ cuối

console.log("firstPost =" ,firstPost, ",lastPost = " , lastPost);


var canPost = quotes.search(/ca..ot/);
console.log(canPost);

var contact = "phone 01672857944";
var phonepos = contact.search(/[0-9]+/);
console.log(phonepos);

var ilove = "I love PHP. PHP file extension is php";
var iloveNode = ilove.replace(/PHP/ig, "Node.js");

//i: in casesensitive
//g: greedy

console.log(iloveNode);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
console.log(res);

var res2 = str.slice(-12,-6);
console.log(res2);

console.log(str.substring(7,13));
//dùng lệnh này chỉ đk dùng số +

console.log(str.toLowerCase());
//viết thường hết
console.log(str.toUpperCase());
//viết ha hết

var fruits = str.split(", ");
console.log(fruits.valueOf());


var love = "LOVE";


for(var i = love.length-1; i >=0; i--)
{
    console.log(love.charAt(i));
}

String.prototype.reverse = function(){
    var result = "";
    for(var i = this.length-1; i >=0; i--)
    {
        result+= this.charAt(i);
    }
    return result;
};
//hàm dùng để đổi ngược các chữ trong từ

console.log(love.reverse());
console.log("Hello".reverse());