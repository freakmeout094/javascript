// conversion of a string to a number

let score  = "33" 
let valueInNumber = Number(score) 

console.log(typeof valueInNumber)

// if score is 33abc when if we do the conversion we will find that the value of score will be Nan that is not a number
// if score is null then the value of score will be 0
// if score is udefined then the value of score will be NaN
// is score is a string and after number conversion the value of score will be NaN
// 1= true and  0= false


// operations(mathematical arithmetic operations)

let value =3
let negvalue = -value
console.log(negvalue)

//operations on strings

let str1= "rahul"
let str2= " kujur"
let str3 = str1 + str2
console.log(str3)

//imp 

console.log("1"+2+2); // first data type decides the whole data type - here the first is string so the overall is string so the output is 12

console.log(1+2+"2");// here the first is a number so the overall data type is number so the output will be a number that is 12
// after 1 and 2 get added then added to the string like the additon in string 

// increment
 let gameCounter = 100
 gameCounter++; // 100 +1    (prefix and postfix)
 console.log(gameCounter);
 


