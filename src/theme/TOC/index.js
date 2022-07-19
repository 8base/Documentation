import { useLocation } from '@docusaurus/router';
import { usePluginData } from '@docusaurus/useGlobalData';
import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React, { useEffect, useState } from 'react';
import Svg from '@site/static/img/like.svg'
export default function TOC({ toc, editUrl, ...props }) {

  return (
    <div className="toc-wrapper">
      <div className='flex toc_header'>
      <span className='toc_header_sep'>
        on this page
      </span>
      <button className='share_button'>
        Share
      </button>
      </div>
      
      <OriginalTOC toc={toc} {...props} />
      <div className='toc_seprator'/>
      <div className='toc_us flex flex_col'>
        <span style={{marginBottom:'0.5rem'}}>
          Was this article useful?
        </span>
        <div className='flex article_reaction'>
          <button className='btn_reaction'>
          <Svg style={{width:'24px', height:'24px'}}/>
          </button>
          <button className='btn_reaction reaction_n'>
          <Svg style={{width:'24px', height:'24px'}}/>
          </button>
        </div>
        <span className='users_perc'>
          89% of our users said this content was useful.
        </span>
      </div>
    </div>
  );
}