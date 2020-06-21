import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Query } from '../../types/graphql-types';
import styled from 'styled-components';

const FooterGroup = styled.footer`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`;

const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
`;

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  a {
    transition: 0.5s;
  }

  a:hover {
    color: black;
  }
`;

const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Footer: FC = ({ children }) => {
  const { allContentfulLink }: Query = useStaticQuery(
    graphql`
      query {
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
              createdAt
            }
          }
        }
      }
    `,
  );

  return (
    <FooterGroup>
      <Text>
        Tweet “Prototype and build apps with React and Swift. New courses by
        @MengTo”
      </Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {allContentfulLink.edges.map(
          (edge) =>
            edge.node.url && (
              <a key={edge.node.url} href={edge.node.url}>
                {edge.node.title}
              </a>
            ),
        )}
      </LinkGroup>

      <Copyright>{children}</Copyright>
    </FooterGroup>
  );
};

export default Footer;
