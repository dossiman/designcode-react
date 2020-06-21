import React, { FC } from 'react';
import './layout.css';
import Header from './header';
import Footer from './footer';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React.
      <a href="mailto:support@designcode.io"> Email us</a> to ask anything. ©
      2018 - Terms of Service - Privacy Policy
    </Footer>
  </>
);

export default Layout;
