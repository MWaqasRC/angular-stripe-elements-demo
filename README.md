# AngularStripeExample

This project is an example of using Stripe Elements in Angular. 
In particular, it is a translation of the last example from the Stripe Elements [Demo Page](https://stripe.github.io/elements-examples).


## Running

Run `ng serve` as usual.

## How to use the stripe-demo in your application

Besides copying the `stripe-demo` directory into your application and loading it like any other component, there are few steps your need to take.

* Add  `<script src="https://js.stripe.com/v3/"></script>` to your `index.html`.  Note that you cannot copy this file into project and load locally. It *must* load this remotely. 
* Add `declare var Stripe: any;` to `src/typings.d.ts`. This lets Angular know about the `Stripe` variable created by loading the above script.
* Change `api_key` to your own.
* 

