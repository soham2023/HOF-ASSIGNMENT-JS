const inventory = {
    item1: 20,
    item2: 10,
    item3: 30,
    item4: 50,
};

const converter = (price) => {
    let exchangeRate = 80;
    return exchangeRate * price;
}

const inr = Object.fromEntries(
    Object.entries(inventory).map(([item, value]) => [item, converter(value)])
);

console.log(inr);
