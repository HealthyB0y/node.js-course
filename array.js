var cars = ["Saab","Volvo","BMW"];

console.log(cars.valueOf());

for(var i=0; i<cars.length;i++)
{
    console.log(cars[i]);
}

console.log(cars.join(" and "));
//dùng để thêm từ nối cho chuỗi cars;

cars.push("Honda");
cars.push("Yamaha");
cars.push("Toyota");
//thêm vào chuỗi;
console.log(cars.valueOf());
//valueOf: in ra chuỗi

/*while(cars.length>0){
    cars.pop();
    //xóa từ trong dãy từ cao đến thấp
    console.log(cars.valueOf());
}*/

while(cars.length>0)
{
    cars.shift();
    //cách xóa mảng từ đầu mảng đến cuối mảng
    console.log(cars.valueOf());
}

