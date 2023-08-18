let holidaySales1 = function (
    product:string, 
    sales:number,
    tax:number,
    discount:number,
    dept:string
    ):number
    {
        let price:number = 0
        if(product === "pens") price = 120;
        if(product === "erasers") price = 100;
        if(product === "pencil") price = 600;

        let totalSales:number = price*sales

        return (
            totalSales - tax * totalSales-
            tax* totalSales -
            discount* totalSales 
        );
    };

    const pens:number = holidaySales1("pens",20,0.15,0.25,"stationary");
    const erasers:number = holidaySales1("erasers",15,0.12,0.15,"stationary");
    const pencil:number = holidaySales1("pencil",50,0.08,0.45,"stationary");

    console.log(`The total profit from the sales of pens is ${pens}`);
    console.log(`The total profit from the sales of sunglass is ${erasers}`);
    console.log(`The total profit from the sales of sunglass is ${pencil}`);
    