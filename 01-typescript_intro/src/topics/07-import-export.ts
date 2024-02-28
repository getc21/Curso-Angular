import { Product, taxCalculation } from './06-function-destructuring';


const shoppingCard : Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'Samsung',
        price: 200,
    }
];

const [ total, tax] = taxCalculation({
    product: shoppingCard,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);