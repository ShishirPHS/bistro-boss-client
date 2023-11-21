import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }
  };

  return (
    <form onClick={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-600">{error}</p>
      <button
        className="btn btn-primary px-7 mt-3"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
