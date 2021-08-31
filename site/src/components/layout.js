import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'


import Header from './header'
import Footer from './footer'

import '../css/styles.scss'

var description = "Pixel Vision 8 is the first customizable 8-bit fantasy console. Don't just make games, design your fantasy console specs to match actual hardware, or create something new. It's perfect for game jams, prototyping ideas, and having fun!";

const Layout = ({ children }) => (

  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={
      
      data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: 'Fantasy Game Console, Pixel Visoin 8, PV8, 8-Bit, Game Engine' },
          ]}
        >
          
          

          <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
          <meta name='twitter:card' content='summary_large_image'/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:title" content="Pixel Vision 8"/>
          <meta name='twitter:image:src' content="https://pixelvision8.github.io/Website/images/social-card-image.png"/>
          <html lang="en" />

        </Helmet>

        <div className="bg-palette-0 text-palette-15 flex flex-col min-h-screen overflow-hidden">
          
          <Header siteTitle={data.site.siteMetadata.title} />

          <main className="flex-grow">
            <div className="mx-auto ">{children}</div>
          </main>

          <Footer />
        </div>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
