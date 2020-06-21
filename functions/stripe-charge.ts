import Stripe from 'stripe';

const stripe = new Stripe('sk_test_tb0Y4ryR5X6tw8Moz8np0a1w00a65WsRQE', {
  apiVersion: '2020-03-02',
});

exports.handler = async function (event) {
  const { tokenId, email, name, description, amount } = JSON.parse(event.body);

  const customer = await stripe.customers.create({
    description: email,
    source: tokenId,
    name,
  });

  await stripe.charges.create({
    customer: customer.id,
    amount,
    description,
    currency: 'usd',
  });

  return { body: 'payment received from ' + email, statusCode: 200 };
};
