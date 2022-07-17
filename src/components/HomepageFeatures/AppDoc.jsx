import React from 'react'
import { frontendDocsSidebar } from '../../../sidebars/_frontend'
import { backendDocsSidebar } from '../../../sidebars/_backend'
import styles from 'prism-react-renderer/themes/github'

function DocumentList({data}) {
  return(
    <div >
       <ul className={styles.flex + styles.flex_col + styles.ul_home}>

    {
    data.map((item)=>{
        return<li>{item.label}</li>

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
    <DocumentList data={backendDocsSidebar}/>
    :
    <DocumentList data={frontendDocsSidebar}/>
    }
    </>
  )
}

export default AppDoc