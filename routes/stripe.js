const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripeClient = require("stripe")(
  "sk_test_51KeMAYEh6tb5wizs5hPGnzYHxnGL1PkmanUqUD8hhNyTVzKAHTiLayfVRkU5LkMUuCa5QxxPpItLWw9qm4BrklEI00yyiV0RJu"
);

router.post("/payment", (req, res) => {
  stripeClient.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
