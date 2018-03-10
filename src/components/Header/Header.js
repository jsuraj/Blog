import React from 'react';
import Link from 'gatsby-link';
import config from '../../../siteconfig';

const Header = () => (
  <div className='header'>
    <div className='header-title'>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            textShadow: 'none',
            backgroundImage: 'none',
            boxShadow: 'none'
          }}
          >
        {config.siteTitle}
        </Link>
      </h2>
    </div>
  </div>
);

export default Header;
