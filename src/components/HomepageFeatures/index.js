import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import AppDoc from './AppDoc';

function HomeUrl({SVG, URL, Text}){
  return(
    <>
    <div className='flex'>
      <Link href={URL} className={styles.doc_url}>
     <SVG className={styles.url_svg}/>

     <span>
      {Text}
     </span>
     </Link>
     <SVG className={styles.arrow_url}/>
    </div>
    </>
  )
}
const Image = [
  {
    Svg: require('@site/static/img/8base.svg').default,
  },
  
];

function Svg({Svg}) {
  return (
    <>
        <Svg className={styles.header_img} role="img" />
    </>
  );
}
function FeaturedVideo({image, text, time,URL}){
 return (<>
 <Link to={URL}>
 <div className={styles.flex + styles.flex_col}>
  <img src={image} alt='video image'/>
  <div className ={styles.flex+ styles.flex_col}>
    <spn>
      {text}
    </spn>
    <span>{time}</span>
    </div> 
 </div>
 </Link>
  </>)
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row flex">
          <div className={'container '+ styles.flex}>
          <Svg {...Image[0]}/>
       {  /*{FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}*/}
          <div className='container flex flex-col'>
          <div className={styles.flex}>
            <h1 className='header'>
            <span className={styles.home_title_red}>
            Built for Developers,  
            </span>
            <span className={styles.home_title}>
              By 
            Developers
            </span>
            </h1>
          </div>
          <div className='flex'>
            <h3>
              Build and run web and mobile applications faster using javascript,
              GraphQl, and 8base.

            </h3>
          </div>
          <div className='flex'>
            <span>
              Don't have an account?
            </span>
            <Link href='https://app.8base.com/auth/signup' className={styles.signup_link}>
              Sign Up Now
            </Link>
          </div>
          </div>
          </div>
          <div className='doc flex container'>
            <h3>
              8base Documentation
            </h3>
            <span>
              Find user guides, developer guides, API refrence, tutorials and more.
            </span>
            <div className={styles.flex}>
              <HomeUrl Text={'8base backend'} SVG={''}/>
              <HomeUrl Text={'8base app builder'} svg={''}/>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
