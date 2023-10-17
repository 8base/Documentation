import React from 'react';
import Logo from '@theme-original/Navbar/Logo';

export default function LogoWrapper(props) {
  return (
    <>
      <Logo {...props} />
      <span
        style={{
          marginLeft: 2,
          fontSize: 40,
          lineHeight: 0,
          marginBottom: 6,
          fontWeight: 100,
        }}
      >
        |
      </span>
      <img
        src="img/docs.png"
        alt="docs logo"
        height={23}
        width={65}
        style={{ marginRight: 92 }}
      />
    </>
  );
}
