/*
Anish Shenoy
SoftDev1 pd7
HW15 -- Sequential Progression
2017-12-06
*/

var fibonacci = function(n){
  if(n == 0) return 0;
  if (n < 2){
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
};

console.log("Fibonacci Test:");
console.log(fibonacci(1) + " expected: 1");
console.log(fibonacci(22) + " expected: 28657");
console.log(fibonacci(6) + " expected: 13");

var gcd = function(a, b){
    var mod = a % b;
    if ( mod  == 0){
      return b;
    }
    return gcd(b, mod);
};

console.log("\nGCD Test: ");
console.log(gcd(34,32) + " expected 2");
console.log(gcd(45,387) + " expected 9");


var names = ["bob", "billy", "freddie mercury", "John Lenon", "Kobe Bryant", "Lebron James", "max", "joe", "donald trump"];
var randomStudent = function(){
    var size = names.length;
    var rand = Math.floor(Math.random() * size);
    return names[rand];
}

console.log("\nrandomStudent Test: ");
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());

var fibfunc = function(){
  console.log(fibonacci(32));
}

var gcdfunc = function(){
  console.log(gcd(234, 32));
}

var randfunc = function(){
  console.log(randomStudent());
}

var fButton = document.getElementById("fButton");
fButton.addEventListener("click", fibfunc);

var gcdButton = document.getElementById("gcdButton");
gcdButton.addEventListener("click", gcdfunc);

var randButton = document.getElementById("randButton");
randButton.addEventListener("click", randfunc);
