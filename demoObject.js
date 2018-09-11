var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

//non object type params are passed by value
//object type params are passed by reference
function makeChange(a_, b_, c_) {
    a_ = 2;
    //arguments[1] = { foo: 'Fun qua' };
    b_.foo = 'Fun qua';
    c_ = "Film Star";
}
makeChange(a, b, c);

console.log(a === a_); //=> true
console.log(b === b_); //=> true
console.log(c === c_); //=> true

console.log('a = ', a, ', b = ', b, ', c =', c);



function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp; //assign tmp to b
}

var x = 1, y = 2;
swap(x, y);

console.log("x = " + x + " y = " + y); // "x is 1 y is 2"