import OriginalSidebar from '@theme-original/DocSidebar';
import React from 'react';
import Logo from '@theme/Logo';

export default function DocSidebar(props) {
  return (
    <>
      {/* <FrameworkSelector /> */}
      <OriginalSidebar {...props} />
    </>
  );
}
