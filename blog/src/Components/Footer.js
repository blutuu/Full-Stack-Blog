import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
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
        <ul>
          {
            !articles 
            ? <h1>Loading...</h1>
            : articles.map((article, key) => (
                <li className="" key={key}>
                  <Link to={`/article/${article.name}`}>
                    <span>{article.name}</span>
                  </Link>
                </li>
            ))
          }
        </ul>
      </div>
      <hr />
      <MernIcons />
    </footer>
  )
};

export default Footer;
