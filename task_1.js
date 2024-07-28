/* 
Write a loop that makes seven calls to console.log to output the following triangle:

დაწერეთ ციკლი, რომელიც 7-ჯერ იძახებს console.log-ს რომ გამოიტანოს შემდეგი სამკუთხედი:

#
##
### 
#### 
##### 
###### 
#######
*/
let i = 0 ;
let row = `#`
while ( i < 7 ) {
     i ++ ;
     console.log ( i );
}
// ძიეზები ვერ ჩავსვი
// let triangle = '';
// for (let i = 1; i <= 7; i++) {
//     triangle += '#';
//     console.log(triangle);
// }
// აქ კიდევ სამუშაო მაქვს