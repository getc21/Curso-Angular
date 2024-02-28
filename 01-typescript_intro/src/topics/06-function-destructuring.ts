
export interface Product {
    description: string;
    price: number;
}

// const phone: Product = {
//     description: "iPhone 11",
//     price: 150.0,
// }

// const laptop: Product = {
//     description: "Macbook Pro",
//     price: 200.0,
// }

interface TaxCalculationOptions {
    tax: number;
    product: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): [number, number] {
//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
export function taxCalculation( options: TaxCalculationOptions): [number, number] {    
    
    const {tax, product} = options;
    
    let total = 0;

    product.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

// const shoppingCard = [phone, laptop];
// const tax = 0.15;


// const [total, taxTotal] = taxCalculation({
//     product: shoppingCard,
//     tax: tax,
// });

// console.log('Total', total);
// console.log('Tax', taxTotal);

