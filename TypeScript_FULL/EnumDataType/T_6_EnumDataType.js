"use strict";
var RollNumbers;
(function (RollNumbers) {
    RollNumbers[RollNumbers["john"] = 0] = "john";
    RollNumbers[RollNumbers["ram"] = 1] = "ram";
    RollNumbers[RollNumbers["praveen"] = 2] = "praveen";
    RollNumbers[RollNumbers["vicky"] = 3] = "vicky";
})(RollNumbers || (RollNumbers = {}));
;
console.log(RollNumbers);
var StudentRollNumbers;
(function (StudentRollNumbers) {
    StudentRollNumbers[StudentRollNumbers["john"] = 1] = "john";
    StudentRollNumbers[StudentRollNumbers["ram"] = 2] = "ram";
    StudentRollNumbers[StudentRollNumbers["praveen"] = 3] = "praveen";
    StudentRollNumbers[StudentRollNumbers["vicky"] = 4] = "vicky";
})(StudentRollNumbers || (StudentRollNumbers = {}));
;
let studentRollNo1 = RollNumbers.ram;
let studentRollNo2 = RollNumbers.praveen;
console.log(studentRollNo1);
console.log(studentRollNo2);
let studentName = "john";
let studentDept = "Civil";
console.log("Student Name : " + studentName);
console.log("Student Department : " + studentDept);
let studentId = 1;
let studentN = "Praveen";
let studentD = "Mechatronics";
console.log(studentId + " " + studentN + " " + studentD);