// Base Decorator
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice();
    }

    getDescription() {
        return this.product.getDescription();
    }
}

// Concrete Decorator for Gift Wrapping
class GiftWrapDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        // Return the product's original price + a $5 gift wrap fee.
        return super.getPrice() + 5; //[cite: 2]
    }

    getDescription() {
        // Return the product's original description + ", gift wrapped".
        return super.getDescription() + ", gift wrapped"; //[cite: 2]
    }
}

// Concrete Decorator for Extended Warranty
class ExtendedWarrantyDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        // Return the product's original price + a $20 warranty fee.
        return super.getPrice() + 20; //[cite: 2]
    }

    getDescription() {
        // Return the product's original description + ", with extended warranty".
        return super.getDescription() + ", with extended warranty"; //[cite: 2]
    }
}

// We need a base Product class with the same interface to decorate it
class BaseProduct {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    getPrice() {
        return this._price;
    }
    getDescription() {
        return this._name;
    }
}

export { ProductDecorator, GiftWrapDecorator, ExtendedWarrantyDecorator, BaseProduct }; //[cite: 2]