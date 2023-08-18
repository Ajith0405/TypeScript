const add = (a: number, b: number): number => {
    return a + b;
};
console.log(add(15,56));

let holidaySales2 = (
    product:string, 
    sales:number,
    tax:number,
    discount:number,
    // dept:string - see tsconfig.json
    ):number => {
        let price:number = 0
        // let department:string = "Tech" see tsconfig.json

        if(product === "Mobile") price = 12000;
        if(product === "Router") price = 2000;
        if(product === "Datacard") price = 650;

        let totalSales:number = price*sales

        return (
            totalSales - tax * totalSales-
            tax* totalSales -
            discount* totalSales 
        );
    };

    const Mobile:number = holidaySales2("Mobile",3,0.15,0.25);
    const Router:number = holidaySales2("Router",5,0.12,0.15);
    const Datacard:number = holidaySales2("Datacard",10,0.08,0.45);

    console.log(`The total profit from the sales of Mobile is ${Mobile}`);
    console.log(`The total profit from the sales of sunglass is ${Router}`);
    console.log(`The total profit from the sales of sunglass is ${Datacard}`);
    
