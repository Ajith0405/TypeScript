//Numeric enum
//pascal case ProductList
//camelcase - productList

enum RollNumbers{
    john,
    ram,
    praveen,
    vicky
};
console.log(RollNumbers);

//with number

enum StudentRollNumbers{
    john=1,
    ram,
    praveen,
    vicky
};

let studentRollNo1:RollNumbers = RollNumbers.ram;
let studentRollNo2:RollNumbers = RollNumbers.praveen;

console.log(studentRollNo1);
console.log(studentRollNo2);

//String Enum Types

const enum StudentDetails{
    name="john",
    dept="Civil"
}

let studentName:StudentDetails = StudentDetails.name
let studentDept:StudentDetails = StudentDetails.dept

console.log("Student Name : "+studentName);
console.log("Student Department : "+studentDept);

//Hetrogeneous  Enums

const enum StudentDetail{
    Id=1,
    name="Praveen",
    dept="Mechatronics"
}

let studentId:StudentDetail = StudentDetail.Id;
let studentN:StudentDetail = StudentDetail.name;
let studentD:StudentDetail = StudentDetail.dept;

console.log(studentId+" "+studentN+" "+studentD);
