+++
title = "Signals as a Design Pattern: Observer and Subscription Patterns"
date = 2023-09-12
[taxonomies]
tags = ["design pattern", "pattern", "signals", "observer", "subscription"]
+++

## Introduction

Signals are a powerful tool for decoupling components in a system. They allow objects to communicate without knowing about each other. This makes it easier to change one part of the system without affecting the rest.

Signals are used in many programming languages and libraries to implement these patterns. Signals are a way to send messages between objects or functions. They are used to notify other parts of the program when an event occurs.

Signals as a Design Pattern are used to implement the Observer Pattern and the Subscription Pattern. These patterns are used to implement event handling systems in a decoupled way.

## Observer Pattern

### Explanation

The observer pattern is a behavioral design pattern in which an object, known as the subject, maintains a list of dependent objects, known as observers, and notifies them of any state changes. This pattern is useful for implementing distributed event handling systems, where changes in one object need to be communicated to a set of dependent objects.

### Key Concepts

1. **Subject**: The object that holds the state and notifies observers about changes.
2. **Observers**: Objects that watch the subject and get notified when the subject changes.
3. **Notification**: The process where the subject informs observers about state changes.

### Example in JavaScript

Let's create a simple example to illustrate the observer pattern.

#### 1. Define the Subject Class

The subject class maintains a list of observers and provides methods to add, remove, and notify them.

```javascript
class Subject {
  constructor() {
    this.observers = [];
    this.state = 0;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.state));
  }

  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }

  getState() {
    return this.state;
  }
}
```

#### 2. Define the Observer Class

The observer class defines the update method that will be called when the subject's state changes.

```javascript
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(state) {
    console.log(`${this.name} observed state change: ${state}`);
  }
}
```

#### 3. Create Instances and Demonstrate

Create instances of the subject and observers, and demonstrate the observer pattern in action.

```javascript
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(1); // Both observers will be notified

subject.removeObserver(observer1);

subject.setState(2); // Only Observer 2 will be notified
```

### Explanation

#### Subject Class

- `observers`: List of observers.
- `addObserver(observer)`: Adds an observer to the list.
- `removeObserver(observer)`: Removes an observer from the list.
- `notifyObservers()`: Notifies all observers of the state change.
- `setState(newState)`: Changes the state and notifies observers.

#### Observer Class

- `update(state)`: Method called when the subject's state changes.

#### Demo

- Create a `subject` instance.
- Create `observer1` and `observer2` instances.
- Add observers to the subject.
- Change the state of the subject to trigger notifications.
- Remove an observer and change the state again to demonstrate selective notifications.

### Output

```console
Observer 1 observed state change: 1
Observer 2 observed state change: 1
Observer 2 observed state change: 2
```

This example illustrates how the observer pattern enables the subject to notify multiple observers of state changes, allowing for decoupled and flexible communication between objects.

{{ example(title="JavaScript Observer Example", src="examples/observer-js.html",height="360px" ) }}

## Subscription Pattern

Certainly! Let's create an example using the jQuery Event API to implement the subscription (publish/subscribe) pattern.

### Example using jQuery Event API

We'll use jQuery's `.on()`, `.off()`, and `.trigger()` methods to manage subscriptions and publishing.

#### 1. HTML Structure

Let's start with a simple HTML structure to demonstrate our example:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>jQuery Pub/Sub Example</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <script src="pubsub.js"></script>
  </body>
</html>
```

#### 2. jQuery PubSub Implementation

Now let's implement the PubSub functionality using jQuery's Event API:

```javascript
// pubsub.js

$(document).ready(function () {
  const eventBus = $({}); // Create a jQuery object to serve as an event bus

  // Subscribe to a topic
  function subscribe(topic, listener) {
    eventBus.on(topic, listener);
  }

  // Unsubscribe from a topic
  function unsubscribe(topic, listener) {
    eventBus.off(topic, listener);
  }

  // Publish to a topic
  function publish(topic, data) {
    eventBus.trigger(topic, data);
  }

  // Subscriber functions
  function subscriber1(event, data) {
    console.log("Subscriber 1 received:", data);
  }

  function subscriber2(event, data) {
    console.log("Subscriber 2 received:", data);
  }

  // Subscribe to topics
  subscribe("topic1", subscriber1);
  subscribe("topic1", subscriber2);

  // Publish to topics
  publish("topic1", ["Hello, World!"]);

  // Unsubscribe a subscriber
  unsubscribe("topic1", subscriber1);

  // Publish again
  publish("topic1", ["Hello again!"]);
});
```

### Explanation

#### Event Bus

We use a jQuery object ($({})) to serve as an event bus for handling custom events.

#### Methods

- **subscribe(topic, listener):** Adds a listener to a topic using jQuery's `.on()` method.
- **unsubscribe(topic, listener):** Removes a listener from a topic using jQuery's `.off()` method.
- **publish(topic, data):** Triggers an event for a topic with the provided data using jQuery's `.trigger()` method.

#### Demo

When you open the `index.html` file in a browser, the following steps occur:

1. The `subscriber1` and `subscriber2` functions are subscribed to "topic1".
2. The `publish("topic1", ["Hello, World!"])` call triggers the event for "topic1", notifying both subscribers.
3. The `unsubscribe("topic1", subscriber1)` call removes `subscriber1` from the "topic1" subscription.
4. The `publish("topic1", ["Hello again!"])` call triggers the event for "topic1" again, but this time only `subscriber2` is notified.

{{ example(title="jQuery subscription, Pub/Sub Example", src="examples/subscription-jquery.html",height="360px" ) }}

## Signal Pattern

### jQuery Signal Implementation

The Signal pattern is a variation of the Subscription pattern that uses a signal object to manage subscriptions and notifications. Let's implement a simple Signal class using jQuery's Event API.

{{ example(title="jQuery Signal Implementation",
src="examples/signal-jquery.html",
height="360px",
type="javascript",
open=true,
source="
$(document).ready(function() {
// Use jQuery's custom event system for signals
const createSignal = (initialValue) => {
const $signal = $({});
let value = initialValue;

        const signal = {
            get value() {
                return value;
            },
            set value(newValue) {
                value = newValue;
                $signal.trigger('change', [value]);
            },
            subscribe(callback) {
                $signal.on('change', (event, newValue) => callback(newValue));
                return () => {
                    $signal.off('change', callback);
                };
            }
        };

        return signal;
    };

    // Create a signal for count
    const count = createSignal(0);

    // Update the display whenever the count changes
    count.subscribe(newValue => {
        $('#displayCount').text('Count: ' + newValue);
    });

    // Increment the count when the button is clicked
    $('#incrementBtn').on('click', () => {
        count.value += 1;
    });

});
"
details="
This implementation leverages jQuery's custom event system to create a signal pattern, similar to Preact's signals.

1. _Signal Creation_: The `createSignal` function uses jQuery's custom event system to manage signals. It triggers a `change` event whenever the signal's value changes.
2. _Signal Subscription_: The `subscribe` method uses jQuery's `.on()` to listen for the `change` event and execute the callback when the signal updates. It returns a function to unsubscribe using `.off()`.
3. _Signal Update_: When the increment button is clicked, it increases the signal's value and triggers the `change` event, causing all subscribed callbacks to run.
   ") }}

### Example using React

{{ example(title="React Signals Chat Example", src="examples/react-signals-chat/build/index.html",height="480px" ) }}

## Conclusion

Design patterns like Observer, Subscription (Pub/Sub), and Signal provide structured solutions to common problems in software development. They help in decoupling components and managing complex state changes and communications in applications. By understanding and implementing these patterns, developers can create more maintainable, scalable, and robust applications. The examples provided illustrate how these patterns can be applied in JavaScript and React, showcasing their versatility and effectiveness in real-world scenarios.
