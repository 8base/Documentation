import React from 'react'
import { frontendDocsSidebar } from '../../../sidebars/_frontend'
import { backendDocsSidebar } from '../../../sidebars/_backend'
import styles from './styles.module.css';
import Link from '@docusaurus/Link';




function DocumentList({data, URL}) {
  return(
    <div className={styles.doc_urls} >
       <ul className={styles.ul_home}>

    {
    data.map((item)=>{
console.log('item=>', item.items[0])
        return(
          <>
         
        <li>
        <Link href={`${URL}`} style={{color:'#0874f9'}} >{item.label}
      </Link>
        
        </li>
        </>)

      })
    }
        </ul>

    </div>
  )
}
const AppDoc = ({renderItem}) => {
  console.log("side bar=>",backendDocsSidebar, "front-end=>",frontendDocsSidebar)
  return (
    <>
    { renderItem == 'backend'?
    <DocumentList data={backendDocsSidebar} URL='/backend'/>
    :
    <DocumentList data={frontendDocsSidebar} URL="/frontend/getting-started/introduction"/>
    }
    </>
  )
}

export default AppDoc