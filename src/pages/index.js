import React, {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { v4 as uuidv4 } from 'uuid';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
    {  /* <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
   <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
   <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/backend/README">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
    */}
    </>
  );
}
function insertAfter(referenceNode, newNode) {
 // referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


//navbar__brand
export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  (function(apiKey){
        (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
        v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
            o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
            y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
            z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
    })('6eee798c-794f-4016-6e1f-1aaa7c43ac39');

  useEffect(()=>{
    var el = document.createElement("div");
    el.className='div_bottom'
      var element = document.getElementsByClassName('navbar__logo');
 
      var elementReplace = document.getElementsByClassName('navbar__brand');
      
      var loc = window.location.pathname;
      console.log('element path=> ',loc)
      if(loc=='/'){
      element[0].className='nav__active navbar__logo '
      elementReplace[0].className=' navbar__brand activate'
      }

      window.pendo.initialize({
        visitor: {
          id: `8base-docs-visitor-${uuidv4()}`,
        },
        account: {
          id: '8BASE-ACCOUNT',
        },
      });
    },[])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
