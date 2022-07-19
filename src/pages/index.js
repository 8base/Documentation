import React, {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(()=>{


      var element = document.getElementsByClassName('navbar__brand');
      var element2 = document.getElementsByClassName('menu__link--active');
      console.log("ele=2=>",element2)
      var loc = window.location.pathname;
      console.log('element path=> ',loc)
      if(loc=='/'){
      element[0].className='nav__active navbar__brand '
      }


    
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
