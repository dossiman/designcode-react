import { Link } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import './header.css';

const Header: FC = () => {
  const [hasScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    const scrolled = window.pageYOffset > 50;

    if (scrolled !== hasScrolled) {
      setScrolled(scrolled);
    }
  };

  const handlePurchase = (token: Token) => {
    const amount = 5000;
    const description = 'My awesome product';
    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.card.name,
      description,
      amount,
    };

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject),
    });
  };

  return (
    <header className={hasScrolled ? 'header header-scrolled' : 'header'}>
      <div className="header-group">
        <Link to="/">
          <img
            src={require('../images/logo-designcode.svg')}
            width="30"
            alt=""
          />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <StripeCheckout
          amount={5000}
          stripeKey="pk_test_WcFTC3kSlmucjD7qmQk61zem00wxfE4R3M"
          token={handlePurchase}
        >
          <button>Buy</button>
        </StripeCheckout>
      </div>
    </header>
  );
};

export default Header;
