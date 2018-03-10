import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../siteconfig';

// import 'normalize.css';         //to override user-agent stylesheet
import './index.css';

import Header from '../components/Header';
// import AdUnit from '../components/AdUnit';           //TODO: uncommment when ads are active

class TemplateWrapper extends React.Component<Props> {

  render() {
    const { children } = this.props;
    return (
      <div className='my-blog'>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name='description' content={config.siteDescription} />
          <meta name='keywords' content={config.keywords} />
          <meta name="google-site-verification" content="2_JoGznVncScrs9gCnsMQTrb68KdDyKjmEYMq_eh0cA" />
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={config.siteUrl} />
          <meta property="og:image" content="https://imgur.com/bxVuRzM" />
        </Helmet>
        <Header />
        <div className='content'>
          {children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
