/* 1. გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, 
დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი */

let number = 87; let num = 65;

console.log(number + num);


/* 2. გამოაცხადეთ ობიექტი student, 
ფროფერთებით: 
firstName, lastName, age, email, marks */

let student = {
    firstName: 'Guga',
    lastName: 'Kvitsinadze',
    age: 23,
    email: 'gkvits13@gmail.com',
    marks: 100
}

console.log(student)

// 3. დაბეჭდეთ student ის სახელი 

console.log(student.firstName)


/* 4. გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23, 
დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე ,
 თუ არადა დაბეჭდეთ n. */

 let m = 45; 
 let n = 23;

 if (m>n) {
    console.log(m+n)
 } else {
    console.log(n)
 }

 /* გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. 
 დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
 ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! ) */

 let studentName = 'Guga';
 console.log("Rise and Shine," + studentName + "!" )


 /* 6.გამოაცხადეთ ცვლადი bonus და salary ცვლადები, 
 salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, 
 დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი მაშინ ბონუსი არის 0, 
 თუ ხელფასი 2000 ze ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
 დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი მნიშვნელობა და შემდეგ დაბეჭდოთ bonus) */

 
 let salary = 1400;
 let bonus;

 if (salary >= 2000) {
    bonus = 0;
 } else {
    bonus = salary * 0.1;
 }

 console.log(bonus)


/* 7. გამოაცხადეთ ცვლადი a, b და c. სადაც a = 23, 
b=a-ნახევარი, 
c= a-ს და b-ს ჯამი. 
დაბეჭდეთ c. */ 

let a = 23;
let b = (a/2);
let c = (a+b);

console.log(c);

/* 8. გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. */

let phones = ['Iphone','Samsung','Pixel','Huawei','Xiaomi']

console.log(phones);
