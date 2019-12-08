export class Product {

    description: string;
    id: number;
    imgUrl: string;
    name: string;
    price: number;

    constructor(product: Partial<Product>) {
        this.description = product.description ? product.description : '';
        this.id = product.id ? product.id : null;
        this.imgUrl = product.imgUrl ? product.imgUrl : '';
        this.name = product.name ? product.name : '';
        this.price = product.price ? product.price : 0;
    }
}
