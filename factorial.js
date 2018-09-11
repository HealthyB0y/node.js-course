// function factorial(n) {
// //     if(typeof(n) != "number")
// //     {
// //         return NaN;
// //     }
// //     if(n===parseInt(n))
// //     {
// //         if(n<=1){
// //             return 1;
// //         } else {
// //             var result =1;
// //             for(var i=2;i<=n;i++){
// //                 result *= i;
// //             }
// //             return result;
// //         }
// //     } else
// //     {
// //         return NaN;
// //     }
// // }





// de quy
function factorial(n) {
    if(typeof(n) != "number")
    {
        return NaN;
    }
    if(n===parseInt(n))
    {
        if(n<=1){
            return 1;
        } else if(n==2){
            return 2 ;
        } else {
            return factorial(n-1)*n;
        }
    } else
    {
        return NaN;
    }
}

console.log(factorial(5));