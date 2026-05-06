// The Subject (also known as Publisher)
class OrderTracker {
    constructor(orderId) {
        this.orderId = orderId;
        this.status = 'New';
        this.observers = [];
    }

    addObserver(observer) {
        // Add the observer to the `this.observers` array.
        this.observers.push(observer); //[cite: 7]
    }

    removeObserver(observer) {
        // Remove the observer from the `this.observers` array.
        this.observers = this.observers.filter(obs => obs !== observer); //[cite: 7]
    }

    notifyObservers() {
        // Loop through all observers and call their `update` method.
        this.observers.forEach(observer => {
            observer.update(this.orderId, this.status); //[cite: 7]
        });
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Order ${this.orderId} status updated to: ${this.status}`);
        this.notifyObservers();
    }
}

// The Observer (also known as Subscriber) interface (conceptual)
class OrderObserver {
    update(orderId, status) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Observer 1
class EmailNotifier extends OrderObserver {
    update(orderId, status) {
        // Log a message to the console simulating an email notification.
        console.log(`Email: Order ${orderId} is now ${status}.`); //[cite: 7]
    }
}

// Concrete Observer 2
class DashboardNotifier extends OrderObserver {
    update(orderId, status) {
        // Log a message to the console simulating a dashboard update.
        console.log(`Dashboard: Order ${orderId} status updated to ${status}.`); //[cite: 7]
    }
}

export { OrderTracker, EmailNotifier, DashboardNotifier };