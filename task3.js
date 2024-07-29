/*1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს 
(m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
თუ რიცხვები ტოლია დააბრუნებს 0 -ს*/

function numbers (m,n) {
    if (m>n)
        console.log(m)
 else if (n>m)
    console.log(n) 
else console.log(0)
} 
numbers(5,5)

/* 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს
(რიცხვს), დააბრუნეთ რიცხვების ჯამი*/

function sum (n , a){
    console.log(n+a)
    
}

sum(4,3)

/* 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს
 თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი) */

/*function fullNam () {
    let firstName = 'Guga';
    let lastName  = 'Kvitsinadze';
    console.log(firstName + " " + lastName)
}

fullNam ()*/

/* 4. დაწერეთ ფუნქცია ორი პარამეტრით 
: firstname და lastname 
დააბრუნეთ სრული სახელი და დაბეჭდეთ 
( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ) */

function names (firstName,lastName) {
    return firstName + ' ' + lastName;
}
let firstName = 'Guga';
let lastName = 'Kvitsinadze';
let fullNam = names(firstName,lastName)

console.log(fullNam)


/* OR

function names (firstName,lastName){
    console.log(firstName + " " + lastName)
}
names ('Guga','Kvitsinadze')

*/


/* 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) 
და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების 
ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის 
მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით 
რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი) */

function task (n){
    let num = 1;
    for (i = 1; i <= n; i++)
        num *= i;
    console.log(num)
}

task(5)

/* 6. დაბეჭდეთ  სტუდენტის სრული სახელი 
(სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი) */

/*let object = {
    firstName: 'Guga',
    lastName: 'Kvitsinadze',
    age: 23,
    scores: [4,7,5,2,3],
    fullName (){
        console.log(this.firstName,this.lastName)
    }
}

object.fullName()*/

/* 7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ 
სტუდენტის ქულებს ( scores) და ფუნქცია 
დააბრუნებს  ქულების ჯამს */

function getSumOfScores (scores){
    let sum = 0;
    for (i = 0; i < scores.length; i++) {

    
        sum += scores[i];
    }
    return sum;
}

let studentScores = [4,7,5,3,2];
let totalSum = getSumOfScores(studentScores);
console.log(totalSum)


// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი 

let object = {
    firstName: 'Guga',
    lastName: 'Kvitsinadze',
    age: 23,
    scores: [4,7,5,2,3],
    fullName (){
        console.log(this.firstName,this.lastName)
    }
}

console.log(firstName,lastName)







