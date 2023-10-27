import React, { useEffect } from 'react';
import Logo from '@theme-original/Navbar/Logo';
import Link from '@docusaurus/Link';

export default function LogoWrapper(props) {
  // This is to style the login button
  useEffect(() => {
    const anchor = document.querySelector(
      'a.navbar__item.navbar__link.button.button--secondary.button--lg.signin'
    );
    if (anchor) {
      const outerDiv = document.createElement('div');
      outerDiv.style.backgroundColor = 'var(--ifm-navbar-background-color)';
      outerDiv.style.padding = '5px 14px';
      outerDiv.style.borderRadius = '100px';

      const innerDiv = document.createElement('div');
      innerDiv.textContent = 'Log into 8base';

      outerDiv.appendChild(innerDiv);
      anchor.appendChild(outerDiv);
    }
  }, []);

  return (
    <>
      <Logo {...props} />
      <Link
        to="/"
        style={{ height: 40, color: '#fff', textDecoration: 'none' }}
      >
        <span
          style={{
            marginLeft: 4,
            marginRight: 3,
            fontSize: 40,
            lineHeight: 1,
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
