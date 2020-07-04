import React, { FC } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { Typography, InputBase, Button } from '@material-ui/core';
import KanjiverseLogo from '../images/kanjiverse-logo.svg';

const Hero = styled.div`
  position: relative;
`;

const HeroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 640px;
  clip-path: polygon(0 0, 0 640px, 100% 580px, 100% 0);
  background: linear-gradient(
    156.65deg,
    #661fff -0.64%,
    #d61fff 62.09%,
    #ff1fb8 98.09%
  );
`;

const HeroContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 64px;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.breakpoints.width('md')}px;
`;

const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 50%;
  padding: 32px 0;

  > * {
    margin: 16px 0;
  }
`;

const KanjiverseLogoGroup = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin: 0 4px;
  }
`;

const Kanjiverse: FC = () => (
  <KanjiverseLogoGroup>
    <KanjiverseLogo />
    <Typography variant="h3" color="textSecondary" display="inline">
      Kanjiverse
    </Typography>
  </KanjiverseLogoGroup>
);

const CTAGroup = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  padding: 8px;
  > * {
    margin-left: 8px;
  }
  > :first-child {
    flex-grow: 1;
  }
`;

const RoundButton = styled(Button)`
  border-radius: 24px;
`;

const CTA: FC = () => {
  return (
    <CTAGroup>
      <InputBase
        margin="dense"
        type="email"
        id="email"
        name="email"
        placeholder="name@email.com"
      />
      <RoundButton variant="contained" color="primary">
        NOTIFY ME
      </RoundButton>
    </CTAGroup>
  );
};

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Kanjiverse" />
      <Hero>
        <HeroBackground />
        <HeroContainer>
          <HeroContent>
            <HeroCopy>
              <Kanjiverse />
              <Typography variant="h1" color="textSecondary">
                Learn Kanjis.
                <br />
                Build your vocabulary.
                <br />
                Read <i>real</i> Japanese.
              </Typography>
              <Typography variant="h3" color="textSecondary">
                A new kind of Japanese dictionary for learners of all levels and
                beyond.
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Coming soon to iOS, Android and web.
              </Typography>
              <CTA />
            </HeroCopy>
            <img
              width="347"
              height="683"
              src={require('../images/phone-mockup.png')}
              alt="Phone mockup"
            />
          </HeroContent>
        </HeroContainer>
      </Hero>
    </Layout>
  );
};

export default IndexPage;
