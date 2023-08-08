function add(a:string,b:string):string;
function add(a:number,b:number):number;
function add(a:any,b:any):any{

    return a+b; //single definition for all function
};

console.log(add(2,3));
console.log(add("Ajith","Kumar"));
console.log(add('H','I'));