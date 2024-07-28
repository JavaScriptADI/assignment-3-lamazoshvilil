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
let row = ``
while ( i < 7 ) {
     i ++ ;
     row += "#"
     console.log ( row );
}
// აქ კიდევ სამუშაო მაქვს