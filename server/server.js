const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const stripe = require("./stripe");
const Customers = require("./models/customers.model");
mongoose.connect(
  "mongodb+srv://nasim:nasim@expense.ckhwn9v.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port: ${port}`));
const products = {
  free: "price_1ML3ARSFAyIqkgIKi4GHTz0K",
  business: "price_1ML0VpSFAyIqkgIKjJ4iZR9S",
  enterprise: "price_1ML3MKSFAyIqkgIKUY5uHTf2",
};
app.get("/", (req, res) => {
  console.log(req.session);
});
app.get("/success", (req, res) => {
  res.send("payment success");
});
app.get("/failed", (req, res) => {
  res.send("payment failed,something went wrong");
});
app.post("/createCustomer", async (req, res) => {
  const { email } = req.body;
  const customer = await stripe.addNewCustomer(email);
  const { id } = customer;
  const customerData = new Customers({ email, id });
  const newCustomer = await customerData.save();
  res.send(customer);
});
app.post("/customerPortal", async (req, res) => {
  const { email } = req.body;
  const customer = await Customers.findOne({ email });
  const id = customer.id;
  const url = await stripe.createPortal(id);
  res.send({ url });
});
app.get("/getCustomer", async (req, res) => {
  const { email } = req.body;
  const customer = await Customers.findOne({ email });
  res.send(customer);
});
app.post("/checkout", async (req, res) => {
  const { email, product } = req.body;
  let stripeProduct = "";
  switch (product) {
    case "Free Trail":
      stripeProduct = products.free;
      break;
    case "Business Plan":
      stripeProduct = products.business;
      break;
    case "Enterprise Plan":
      stripeProduct = products.enterprise;
      break;
    default:
      stripeProduct = products.free;
  }
  const customer = await Customers.findOne({ email });
  const { id } = customer;
  const session = await stripe.createCheckoutSession(id, stripeProduct);
  res.send({ sessionId: session.id });
});
app.post(
  "/checkoutWebhook",
  async(request, response) => {
    let event=request.body;
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        session = event.data.object;
        break;
      case "checkout.session.async_payment_succeeded":
        session = event.data.object;
        break;
      case "checkout.session.completed":
        session = event.data.object;
        break;
      case "checkout.session.expired":
        session = event.data.object;
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    response.send();
  }
);
app.post("/subscriptionWebhook",async(req,res)=>{
    const event=req.body;
    let subscription;
    switch (event.type) {
        case 'subscription_schedule.aborted':
          subscription= event.data.object;
          break;
        case 'subscription_schedule.canceled':
          subscription= event.data.object;
          break;
        case 'subscription_schedule.completed':
          subscription = event.data.object;
          break;
        case 'subscription_schedule.created':
          subscription = event.data.object;
          console.log(subscription)
          break;
        case 'subscription_schedule.expiring':
          subscription = event.data.object;
          break;
        case 'subscription_schedule.released':
          subscription = event.data.object;
          break;
        case 'subscription_schedule.updated':
          subscription = event.data.object;
          break;
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
})
app.post("/customerSubscription",async(req,res)=>{
        const event=req.body;
        let subscription;
        switch (event.type) {
          case 'customer.subscription.created':
            subscription = event.data.object;
            const schedule=await stripe.createSubscriptionSchedule(subscription.id)
            break;
          case 'customer.subscription.deleted':
            subscription = event.data.object;
            break;
          case 'customer.subscription.pending_update_applied':
           subscription = event.data.object;
            break;
          case 'customer.subscription.pending_update_expired':
            subscription = event.data.object;
            break;
          case 'customer.subscription.trial_will_end':
             subscription = event.data.object;
            break;
          case 'customer.subscription.updated':
             subscription = event.data.object;
            break;
          default:
            console.log(`Unhandled event type ${event.type}`);
        }
})
app.get("/hello", (req, res) => {
    res.send("hello");
  console.log("someone requested...");
});
