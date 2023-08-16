let mixedData: (string | number)[] = ["cosmos",13, 50, "Star"];

for(let item of mixedData){
    console.log(item);
}

for(let item of mixedData.entries()){
    console.log(item[0], item[1]);
}

for(let [i, item] of mixedData.entries()){
    console.log(`${i+1} - ${item}`);
}
 