function filterByCategory(products) {
    function filterFunction(category) {
        return products.filter(product => product.category === category);
    }

    return filterFunction;
}

const products = [
    { name: 'Pant', category: 'Clothing' },
    { name: 'Shirt', category: 'Clothing' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'tv', category: 'Electronics' }
];
const filterProducts = filterByCategory(products);
const category1Products = filterProducts('Clothing');
console.log(category1Products);
