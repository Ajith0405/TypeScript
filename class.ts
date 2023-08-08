class Student{
    id:number;
    name:string;

    constructor(id:number,name:string)
    {
        this.id = id;
        this.name = name;
    }

    display():void //Method-no parameter and no return
    {
        console.log("ID: "+this.id + " Name: "+this.name);
    }
}

    let stud1 = new Student(1,"Arun");
    stud1.display();
    let stud2 = new Student(2,"Bavana");
    stud2.display();
    let stud3 = new Student(3,"Kumar");
    stud3.display();
    let stud4 = new Student(4,"Prem");
    stud4.display();

    //get values 
        console.log(stud1.id);
        console.log(stud1.name);
        