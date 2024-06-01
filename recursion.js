console.log('hello');

function fibs(n){ // iteration function

    let x = 0; // previsios number1
    let y = 0; //previsios number2
    let z = 0; //result
    const fibonacciArrey = [];

    for (let i = 0; i < n; i++){
        if ( i == 0 ){
            z = i;
        }else if ( i == 1){
            z = i;
            x = z;
        }else{
            z = x + y;
            y = x
            x = z;
        }
        fibonacciArrey.push(z);
    }
   console.log(fibonacciArrey);
}
fibs(8);

   const fibRecArrey = [];
   let x = 1; // precedent number1
   let y = 0; // prevision number2
   let z = 0; //result
   function fibonacciRec(n){  // recursion function
       z = x + y;
       y = x;
       x = z;
       if ( n == 2){
           return z;
       }else{
           fibRecArrey.push(z)
           return fibonacciRec(n - 1);
       }
   }
   fibonacciRec(8);
   console.log(fibRecArrey);