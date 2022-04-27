export class ProductManager {
    private products = [];
    get getAll(){
        return this.products
    }
    set add(product){
        this.products.push(product)
    }
}