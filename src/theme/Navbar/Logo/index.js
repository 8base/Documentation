import React from 'react';
import Logo from '@theme-original/Navbar/Logo';
import Link from '@docusaurus/Link';

export default function LogoWrapper(props) {
  return (
    <>
      <Logo {...props} />
      <Link
        to="/"
        style={{ height: 40, color: '#fff', textDecoration: 'none' }}
      >
        <span
          style={{
            marginLeft: 2,
            fontSize: 40,
            lineHeight: 0.8,
            fontWeight: 100,
          }}
        >
          |
        </span>
      </Link>
      <Link to="/" style={{ height: '35%' }}>
        <img
          src="/img/docs.png"
          alt="docs logo"
          height={23}
          width={65}
          style={{ marginRight: 92 }}
        />
      </Link>
    </>
  );
}
