import { Product } from "./models/Product";

import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";

// const sampleProduct = new DigitalProduct(1, 'Demo Product', 20, 50, 100);
const sampleProduct = new Product(1, 'Demo Product', 20, 50);
const sampleProduct1 = new PhysicalProduct(1, 'Demo Product', 20, 50);

console.log(sampleProduct.getDetails())
// console.log(sampleProduct.getDownloadInfo())
// console.log(sampleProduct.getDetails())

console.log(sampleProduct.getStockValue())
console.log(sampleProduct1.getStockValue())


// console.log(sampleProduct.sell(25));