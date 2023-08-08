function show(id:number, name:string,email?:string){
    console.log("id : ",id," Name : ",name);
    if(email != undefined)  {
        console.log("Email : ", email);
        
    }
};

let user1 = show(101,"Arun");
let user2 = show(102,"Kumar","kumar@gmail.com");

console.log(user1);
console.log(user2);