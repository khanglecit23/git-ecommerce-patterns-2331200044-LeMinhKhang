// The Invoker class
class CommandInvoker {
    constructor() {
        this.history = [];
    }

    executeCommand(command) {
        command.execute();
        this.history.push(command);
    }

    undoLastCommand() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

// The Command interface (conceptual in JS)
class Command {
    execute() {
        throw new Error("Execute method must be implemented.");
    }
    undo() {
        throw new Error("Undo method must be implemented.");
    }
}

// Concrete Command for adding a product to the cart
class AddToCartCommand extends Command {
    constructor(cartService, product) {
        super();
        this.cartService = cartService;
        this.product = product;
    }

    execute() {
        // Call the `addProduct` method of the `cartService`.
        this.cartService.addProduct(this.product); //[cite: 6]
    }

    undo() {
        // Call the `removeProduct` method of the `cartService`, using the product's ID.
        this.cartService.removeProduct(this.product.id); //[cite: 6]
    }
}

export { CommandInvoker, AddToCartCommand }; //[cite: 6]