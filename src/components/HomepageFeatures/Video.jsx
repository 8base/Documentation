import Link from '@docusaurus/Link'
import React from 'react'
import styles from './styles.module.css';

const Video = ({data}) => {

  return (
    <div className={styles.flex + ' '+styles.felx_col +' '+ styles.video_cont}>
        <Link href={data.url}>
        <div className={styles.flex }>
            <img src={data['thumbnail-image'].url} className={styles.video_tumb}/>
        </div>
        <div className={styles.flex +' '+ styles.flex_col + ' '+styles.video_sub}>
            <span className={styles.video_text}>
                {data.name}
            </span>
            <span className={styles.video_time}>
                {data.time}
            </span>
        </div>
        </Link>
    </div>
  )
}

export default Video