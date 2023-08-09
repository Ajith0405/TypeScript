// array - set of homogenous type of values

//array of numbers
let numbers:number[] =[1,2,3,4,5];

console.log(numbers);
console.log(numbers[0]);


//array of strings 
let products:string[] = ["Hats","Shirt","phants"];
console.log(products);
console.log(products[1]);


//array of strings and numbers

let mixData:(string | number)[]=["Hi",24,"Hello",45];
console.log(mixData);
console.log(mixData[3]);;


//array of string, number and boolean;

let mixData2:(string | number | boolean)[] =["Hi",true,78];

console.log(mixData2);
console.log(mixData2[1]);


//Nested Array 
    //tWo Dimensional numbers
        let myNums:number[][] =[
            [1,2,3],
            [4,5,6]
        ];

        console.log(myNums);
        console.log(myNums[0][2]);
        
    
    //nested String array
    let myString:string[][] =[["HI","Bye"],["hello","Replay"],["There","Where"]];
        console.log(myString);
        console.log(myString[1][1]);
        
    
    //nested mixed array string and number
        let mixedArray:(string | number)[][] =[["Hi",123],[456,"Hello"]];
        console.log(mixedArray);

    //nested mixed Array with string,number and boolean;
        let mixedArray2:(string | number | boolean)[][] = [[1,"Arun",true],[2,"Banu",false]];
        console.log(mixedArray2[0][0]+" "+mixedArray2[0][1]+" "+mixedArray2[0][2]);
        
        

