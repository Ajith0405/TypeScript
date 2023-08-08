function show(id: number, name: string, email?: string) {
  console.log("id : ", id, " Name : ", name);
  if (email != undefined) {
    console.log("Email : ", email);
  }
}

let user1 = show(101, "Arun");
let user2 = show(102, "Kumar", "kumar@gmail.com");

console.log(user1);
console.log(user2);

//Function with Default Values
function show1(id: number, name: string, email: string = "abc@gmail.com") {
  console.log("id : ", id, " Name : ", name, "Email : ", email);
}

show1(102, "Prem");

//rest Parameters in function - for unkwon length of parameters
function sum(a: number, ...b: number[]): number {
  let res = a;
  for (let i = 0; i < b.length; i++) {
    res += b[i];
  }
  return res;
}

console.log(sum(2, 3, 4, 5, 6, 7));
console.log(sum(1, 3));

//Arrow Function
let add=(a:number,b:number) => a+b;

console.log(add(4,5));