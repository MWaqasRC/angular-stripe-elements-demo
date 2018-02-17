import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'stripe-demo',
  templateUrl: './stripe-demo.component.html',
  styleUrls: ['./stripe-demo.component.css']
})
export class StripeDemoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

  }


  token : string;
  ngAfterViewInit(){
    var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh'); // use your test publishable key

    var elements = stripe.elements({
      // Stripe's examples are localized to specific languages, but if
      // you wish to have Elements automatically detect your user's locale,
      // use `locale: 'auto'` instead.
      locale: 'en'
    });
    console.log("NYA", elements);

    /**
     * Card Element
     */
    var card = elements.create("card", {
      iconStyle: "solid",
      style: {
        base: {
          iconColor: "#fff",
          color: "#fff",
          fontWeight: 400,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "15px",
          fontSmoothing: "antialiased",

          "::placeholder": {
            color: "#BFAEF6"
          },
          ":-webkit-autofill": {
            color: "#fce883"
          }
        },
        invalid: {
          iconColor: "#FFC7EE",
          color: "#FFC7EE"
        }
      }
    });
    card.mount("#example5-card");

    var paymentRequest = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        amount: 2500,
        label: "Total"
      },
      requestShipping: true,
      shippingOptions: [
        {
          id: "free-shipping",
          label: "Free shipping",
          detail: "Arrives in 5 to 7 days",
          amount: 0
        }
      ]
    });


    paymentRequest.on("token", function(result) {
      console.log("asdf");
      var example = document.querySelector(".example5");
      this.token = result.token.id;
      example.classList.add("submitted");
      result.complete("success");
    });

    var paymentRequestElement = elements.create("paymentRequestButton", {
      paymentRequest: paymentRequest,
      style: {
        paymentRequestButton: {
          theme: "light"
        }
      }
    });

    // canMakePayment returns true if your browser has saved your payment information
    // (think: google wallet or apple pay)
    // paymentRequest.canMakePayment().then(function(result) {
    //   if (result) {
    //     document.querySelector(".example5 .card-only").style.display = "none";
    //     document.querySelector(
    //       ".example5 .payment-request-available"
    //     ).style.display =
    //       "block";
    //     paymentRequestElement.mount("#example5-paymentRequest");
    //   }
    // });
  }


}
