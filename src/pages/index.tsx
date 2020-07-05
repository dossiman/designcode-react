import React, { FC } from 'react';

import Layout, { SectionDivider } from '../components/layout';
import SEO from '../components/seo';
import Hero from '../sections/hero';
import DesignSection from '../sections/design';
import LearnMore from '../components/learn-more';
import SearchSection from '../sections/search';

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Landing Page" />
      <Hero />
      <SectionDivider />
      <LearnMore />
      <SectionDivider />
      <DesignSection />
      <SectionDivider />
      <SearchSection />
      <SectionDivider />
    </Layout>
  );
};

export default IndexPage;
