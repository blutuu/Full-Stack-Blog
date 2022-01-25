import React from 'react';
import styled from 'styled-components';
import ArticlesList from './ArticlesList';
import ContactForm from './ContactForm';
import MernIcons from './MernIcons';

const MidHeader = styled.h3`
  margin-bottom: 0rem;
  color: white;
  font-size: 1.25rem;
  font-weight: 300;
`;

const Footer = ({ articles }) => {
  return (
    <footer className="bg-black-80" id="footer">
      <ContactForm />
      <hr />
      <div id="recent-articles-list">
        <MidHeader>Recent Articles</MidHeader>
        <ArticlesList articles={articles} listType={'small'}/>
      </div>
      <hr />
      <MernIcons />
    </footer>
  )
};

export default Footer;
