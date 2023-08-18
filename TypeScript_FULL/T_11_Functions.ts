function holidaySales(
    product:string, 
    sales:number,
    tax:number,
    discount:number):number
    {
        let price:number = 0
        if(product === "sunglass") price = 120;
        if(product === "hats") price = 100;
        if(product === "shoes") price = 600;

        let totalSales:number = price*sales

        return (
            totalSales - tax * totalSales-
            tax* totalSales -
            discount* totalSales 
        );
    };

    const sunglass:number = holidaySales("sunglass",20,0.15,0.25);
    const hats:number = holidaySales("hats",15,0.12,0.15);
    const shoes:number = holidaySales("shoes",50,0.08,0.45);

    console.log(`The total profit from the sales of sunglass is ${sunglass}`);
    console.log(`The total profit from the sales of sunglass is ${hats}`);
    console.log(`The total profit from the sales of sunglass is ${shoes}`);
    