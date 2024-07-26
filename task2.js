// 1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე

for (let n = 2; n < 8; n++)
    console.log(n)

/*2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ 
ყოველი მეოთხე რიცხვი 
(უნდა დაიბეჭდოს 5,9,13…) */


for(let m = 5; m<=35; m+=4)
    console.log(m)


//3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
let product = 1;
for (let number=3; number<8; number++) {
    console.log(number);
    product *= number;
}


console.log('Product', product)

/*4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს 
firstName, lastName, age 
და დაბეჭდეთ person-სრული სახელი 
( სახელი და გვარი)*/
 
let person = {
    firstName: 'Guga',
    lastName: 'Kvitsinadze',
    age: 23 
}
console.log('Full Name',person.firstName+' '+ person.lastName)

//5. დაბეჭდეთ მეოთხე დავალებაში გამოცხადებული პერსონის თითოეული property value 

 let person1 = {
    firstName: 'Guga',
    lastName: 'Kvitsinadze',
    age: 23 
}

for(let key in person1) {
    console.log(person1[key]);
}

/*6. დაწერეთ მასივი fruits ელემენტებით 
["Apple", "Banana", "Orange"]; 
დაბეჭდეთ მასივის თითოეული წევრი.*/

let fruits = ['Apple', 'Banana', 'Orange']

console.log(fruits)


//7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits

let fruits1 = ['Apple', 'Banana', 'Orange']

fruits.push('Pineapples')
fruits.unshift('Grapes')
console.log(fruits1)

//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი

let sum = 0;

for (let i = 1; i<34; i++){
    console.log(i)
    sum += i;
}
console.log('SUM', sum);