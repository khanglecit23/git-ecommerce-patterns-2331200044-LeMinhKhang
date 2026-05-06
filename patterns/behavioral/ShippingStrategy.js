// The Context class that uses a strategy
class ShippingCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(packageDetails) {
        // Call the `calculate` method on the currently set strategy object.
        return this.strategy.calculate(packageDetails); //[cite: 5]
    }
}

// The Strategy interface (conceptual in JS)
class ShippingStrategy {
    calculate(packageDetails) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Strategy 1: Flat Rate
class FlatRateStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        // Return a fixed shipping cost of 10.
        return 10; //[cite: 5]
    }
}

// Concrete Strategy 2: Weight-Based
class WeightBasedStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        // Return a cost based on the package weight ($3 per kilogram).
        return packageDetails.weight * 3; //[cite: 5]
    }
}

export { ShippingCalculator, FlatRateStrategy, WeightBasedStrategy };