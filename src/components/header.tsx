import { Link } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';
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
      </div>
    </header>
  );
};

export default Header;
