class car{
    color:string;
    constructor(color:string){
        this.color = color;
    }
}

class benz extends car{
    price:number;
    constructor(color:string,price:number){
        super(color);
        this.price = price;
    }

    display():void{
        console.log("Benz Car Color is : "+this.color+" Price is : "+this.price);
        
    }

}

 let car1 = new benz("Black",2500000);

 car1.display();
