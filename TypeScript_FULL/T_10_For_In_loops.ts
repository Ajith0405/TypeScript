let data:(string | number )[] = ["Ajith",24,"Arun",25];
for(let item in data){
   // console.log( typeof item); //+ == parseint()
   // console.log( typeof +item); 
   //console.log(`${item+1} - ${data[item]}`);
    console.log(`${+item+1} - ${data[item]}`);
}