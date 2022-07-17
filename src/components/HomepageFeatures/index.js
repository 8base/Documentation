import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import AppDoc from './AppDoc';
import Video from './Video';
import videos from '../video-data.json'
{/*in any svg just put any one and comment on them by REPLACE IT */}

{/*passing svg in Home URl funstion return an error.. */}
function Svg({Svg}) {
  console.log('svg home=> ',Svg )
  return (
    <>
        <Svg className={styles.header_img} role="img" />
    </>
  );
}
function HomeUrl({Svg, URL, Text}){
  console.log(Svg)

  return(
    <>
    <div className={styles.flex}>
      <Link href={URL} className={styles.doc_url}>
     <Svg {...Svg} />

     <span>
      {Text}
     </span>
     </Link>
     <Svg {...Svg} />

    </div>

    </>
  )
}
const Image = [
  {
    Svg: require('@site/static/img/8base.svg').default,
  },
  {
    Svg: require('@site/static/img/logo.svg').default,
  },
  
];



{/*function FeaturedVideo({image, text, time,URL}){
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
}*/}


export default function HomepageFeatures() {
  console.log("home videos", videos)
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row flex">
          <div className={'container '+ styles.flex}>
          <Svg {...Image[0]}/>
       {  /*{FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}*/}

          <div className={'container' +styles.flex  + styles.flex_col}>
          <div className={styles.flex}>
            {/*replace this SVG by yhe dark one in the light mode version */}
            <Svg {...Image[1]}/>
          <div className='flex'></div>
          
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
              {/*URL SVG */}
              <div className={styles.flex + styles.flex_col}>
           <HomeUrl Text={'8base backend'} {...Image[1]} URL={'8base.com'}/>
            <AppDoc renderItem={'backend'}/>
           </div>
           <div className={styles.flex + styles.flex_col}>
           <HomeUrl Text={'8base backend'} {...Image[1]} URL={'8base.com'}/>
           <AppDoc renderItem={'Front'}/>
           </div>
            </div>
            <div className={styles.flex + styles.flex_col}></div>
            <span>
              Featured Video
            </span>
          </div>
          {/*to be like the design.. you can remove the slice
           and will display the whole array in the screen.. */}
          {
            
            videos.items.slice(Math.max(videos.items.length -4 , 1)).map((data)=>{
              return <Video data={data}/>
            })
          }
          {/*visit 8base community */}
          <div className={styles.flex + ' '+ styles.join_card}>
            <div className={styles.flex}>
              <div className={styles.join_img}>
              <Svg {...Image[1]} />
            </div>
              <span  className={styles.hr}></span>
              <span>Community</span>
            </div>
            <div className={styles.flex }>
              <p>
                Hop on our community to get thechincal support and participate in forum topics.
              </p>
              <div className={styles.flex}>
                <button className={styles.join}>
                  Join Now
                </button>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
