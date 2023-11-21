import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Home/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Add publishable key
const stripePromise = loadStripe("");

const Payment = () => {
  return (
    <div>
      <SectionTitle
        subHeader={"Payment"}
        header={"Please pay to eat"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
