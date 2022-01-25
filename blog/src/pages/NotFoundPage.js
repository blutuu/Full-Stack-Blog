import React from 'react';
import error404 from '../Images/404-error.png';

const NotFoundPage = () => {
  return (
    <div className='mv5 ' id='not-found-page'>
      <div id='page-content'>
        <img className='w5 center db' src={ error404 } alt="404" />
        <h2 className='fw3 tc mt3 f2'>Sorry, we couldn't find that page</h2>
      </div>
    </div>
  )
};

export default NotFoundPage;
