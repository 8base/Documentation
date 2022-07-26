import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import AppDoc from './AppDoc';
import Video from './Video';
import videos from '../video-data.json'
import ArrowRight from '@site/static/img/up_right.svg'
import BackendSvg from '@site/static/logos/8base-backend.svg'
import Appbuilder from '@site/static/logos/8base-appbuilder.svg'


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
function HomeUrl({SVG, URL, Text}){

  return(
    <>
      <Link href={URL} className={styles.doc_url}>

    <div className={styles.flex + ' '+styles.home_url}>
      <div className={styles.flex +' '+ styles.alcenter+' ' + styles.url_left}>
     <SVG  />

     <span className={styles.home_url_span}>
      {Text}
     </span>
     </div>
    <ArrowRight className={styles.arrow_right_home}/>

    </div>

    </Link>

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
  {
    Svg: require('@site/static/img/up_right.svg').default,

  }
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
            <div className={styles.main_img} style={{marginTop:'2rem'}}>
          <Svg {...Image[0]} />
          </div>
       {  /*{FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}*/}

          <div className={'container'+' ' +styles.flex +' ' + styles.flex_col+' ' +styles.home_cont_wr}>
          <div className={styles.flex + ' '+ styles.flex_col + ' '+ styles.header_wr}>
            {/*replace this SVG by yhe dark one in the light mode version */}
            <Svg {...Image[1]}/>
          
            <h1 className={styles.header}>

            <span className={styles.home_title_red}>
            Built for developers,  
            </span>
            <span className={styles.home_title}>
              by 
            developers
            </span>
            </h1>
          </div>
          <div className='flex'>
            <h3 style={{fontWeight:'300'}} className>
              Build and run web and mobile applications faster using JavaScript,
              GraphQL, and 8base.

            </h3>
          </div>
          <div className='flex'>
            <span className={styles.span_muted +' '+ styles.acc_span} >
              Don't have an account?
            </span>
            <Link href='https://app.8base.com/auth/signup' className={styles.signup_link}>
              Sign Up Now
            </Link>
          </div>
          </div>
          </div>
          <div className={styles.doc +' '+styles.flex }>
            <h3 className={styles.h3_home}>
              8base Documentation
            </h3>
            <span style={{paddingBottom:'1rem'}}>
              Find user guides, developer guides, API references, tutorials, and more.
            </span>
            <div className={styles.flex +' '+styles.home_url_cont}>
              {/*URL SVG */}
            <div className={styles.flex + styles.flex_col +' '+ styles.homr_url_wrapper}>
            <div className={styles.flex+ styles.flex_col + ' '+styles.url_inner}>
            <HomeUrl Text={'8base Backend'} SVG={BackendSvg} URL={'/backend'}/>
        
            <AppDoc renderItem={'backend'}/>
            <Link href='/backend' className={styles.join_academy+' '+styles.view_url} >
              <div className={styles.inner_join_button}>
            View All Backend Docs
            </div>
          </Link>
            </div>
           </div>
           <div className={styles.flex + styles.flex_col+ ' '+ styles.homr_url_wrapper}>
          <div className={styles.flex+ styles.flex_col + ' '+styles.url_inner}>
          <HomeUrl Text={'8base App Builder'} SVG={Appbuilder} URL={'/frontend/getting-started/introduction'}/>
           <AppDoc renderItem={'Front'}/>
           <Link href='/frontend/getting-started/introduction' className={styles.join_academy+' '+styles.view_url} >
           <div className={styles.inner_join_button}>
          
            View All App Builder Docs
          </div>
          </Link>
           </div>
           </div>
            </div>
            <div className={styles.flex + styles.flex_col}></div>
          
          </div>
          <span className={styles.featured}>
              Featured Video
            </span>
          {/*to be like the design.. you can remove the slice
           and will display the whole array in the screen.. */}
           <div className={styles.flex +' '+styles.video_items_row}>
      
          {
            
            videos.items.slice(Math.max(videos.items.length -4 , 1)).map((data)=>{
              return <Video data={data}/>
            })
          }
          
          </div>
          <a href='https://www.8base.com/8base-academy' className={styles.join_academy+' '+ styles.join_left} >
            <div className={styles.inner_join_button}>
            Visit 8base Academy
            </div>
          </a>
          {/*visit 8base community */}
          <div className={styles.flex + ' '+ styles.join_card}>
            <div className={styles.flex +' '+styles.join_comp} style={{alignItems:'unset'}}>
              <div className={styles.join_img}>
              <Svg {...Image[1]} />
            </div>
              <span  className={styles.hr} style={{marginTop:'auto', marginBottom:'auto'}}></span>
              <span className={styles.community}>community</span>
            </div>
            <div className={styles.flex +' '+styles.join_comp_text} >
              <p className={styles.p_comm}>
                Hop on our community to get technical support and participate in forum topics.
              </p>
              <div className={styles.flex}>
                <button className={styles.join}>
                  <div className={styles.inner_join_button} >
                  Join Now
                  </div>
                </button>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
