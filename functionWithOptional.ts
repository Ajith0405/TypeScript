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

//Function with Default Values
function show1(id: number, name: string, email:string="abc@gmail.com") {
    console.log("id : ", id, " Name : ", name, "Email : " , email);
   
  };
  
      console.log(show1(102,"Prem"));