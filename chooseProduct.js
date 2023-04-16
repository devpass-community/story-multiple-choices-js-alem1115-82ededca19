var obj = {
    Beverage: "Soda",
    Fruit: "Apple",
    Hygiene: "Soap"
}

function chooseProduct(segment) {
    return obj[segment]
}

module.exports = chooseProduct;