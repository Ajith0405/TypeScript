let num1:number =10;
let num2:number =5;
let num3:number =15;

//if condition
if(num1>num2)
console.log(`${num1} is greater than ${num2}`);

//if-else 
if(num2 > num1){
    console.log(`${num2} is greater than ${num1}`);
}else{
    console.log(`${num2} is not greater than ${num1}`);
}

//else if 
if(num1>num3){
    console.log(`${num1} is greater than ${num3}`);
}else if(num3>num2){
    console.log(`${num3} is greater than ${num2}`);
}else if(num3>num1){
    console.log(`${num3} is greater than ${num1}`);
}else{
    console.log("All are Equal");
}

//Terniary operator
num1 < num3 ? console.log(`${num1} is less than ${num3}`):console.log(`${num1} is greater than ${num3}`);




