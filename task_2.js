/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
So if you solved it, your labor market value just went up.)

დაწერეთ პროგრამა, რომელიც console.log -ს იყენებს, რომ გამოიტანოს ყველა რიცხვი 1 -დან 100 -მდე, 3 გამონაკლისით.
1. რიცხვები, რომლებიც იყოფა 3 -ზე, გამოიტანეთ "Fizz" რიცხვის მაგივრად,
2. რიცხვები, რომლებიც იყობა 5 -ზე (და არა 3 -ზე), გამოიტანეთ "Buzz" რიცხვის მაგივრად.
3. რიცხვები, რომლებიც იყოფა ორივეზე 3 -ზეც და 5 -ზეც გამოიტანეთ "FizzBuzz"
*/
let x = 0;
while (x < 100) {
     x = x + 1 ;
     // x++;

     if ( x % 3 ===0 && x % 5 !==0 ) {
          console.log("Fizz");
     }
     if ( x % 5 === 0 && x % 3 !==0 ) {
          console.log ("Buzz");
     }
     if ( x % 3 ===0 && x % 5 ===0 ) {
          console.log("FizzBuzz");
     } else {
          console.log ( x );
     }
}
//  მიწერს ციფრსაც და მინიჭებულ სახელსაც