import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        console.log(`Starting checkout process for user: ${orderDetails.userId}`);

        // 1. Check if all products are in stock
        const isStockAvailable = this.inventoryService.checkStock(orderDetails.productIds);
        if (!isStockAvailable) {
            console.log("Order Failed: One or more products are out of stock.");
            return;
        }
        console.log("Step 1: Inventory check passed.");

        // 2. Process the payment
        const isPaymentSuccessful = this.paymentService.processPayment(orderDetails.userId); 
        if (!isPaymentSuccessful) {
            console.log("Order Failed: Payment could not be processed.");
            return;
        }
        console.log("Step 2: Payment processed successfully.");

        // 3. Arrange shipping
        const isShippingArranged = this.shippingService.arrangeShipping(orderDetails.shippingInfo);
        if (!isShippingArranged) {
            console.log("Order Failed: Could not arrange shipping.");
            return;
        }
        console.log("Step 3: Shipping arranged.");
        
        console.log("Success: Order placed completely!");
    }
}

export { CheckoutFacade };