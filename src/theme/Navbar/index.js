import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';
import SearchBar from '@theme/SearchBar';
import { useThemeConfig } from '@docusaurus/theme-common';

import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';
import styles from './styles.module.css'; // retrocompatible with v1
import ColorModeToggleWrapper from './ColorModeToggle';

const DefaultNavItemPosition = 'right'; // If split links by left/right
// if position is unspecified, fallback to right (as v1)

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'left');
  const rightItems = items.filter(item => (item.position ?? DefaultNavItemPosition) === 'right');
  return {
    leftItems,
    rightItems
  };
}

function Navbar() {
  const {
    navbar: {
      items,
      hideOnScroll,
      style
    },
    colorMode: {
      disableSwitch: disableColorModeSwitch
    }
  } = useThemeConfig();
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);

  
  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);
  
  const {
    leftItems,
    rightItems
  } = splitNavItemsByPosition(items);
  return <nav  className={clsx('navbar', 'navbar--fixed-top', {
    'navbar--dark': style === 'dark',
    'navbar--primary': style === 'primary',
    'navbar-sidebar--show': sidebarShown,
  
  })}>
    <div className="navbar__inner">
      <div className="navbar__items">
        {items != null && items.length !== 0 && <div aria-label="Navigation bar toggle" className={clsx(styles.navbar__toggle, "navbar__toggle")} role="button" tabIndex={0} onClick={showSidebar} onKeyDown={showSidebar}>
          <IconMenu />
        </div>}
        <Logo className={clsx(styles.navbar__brand, "navbar__brand")} imageClassName={clsx(styles.navbar__logo, "navbar__logo")} titleClassName={clsx('navbar__title', {
          [styles.hideLogoText]: isSearchBarExpanded
        })} />
        {leftItems.map((item, i) => <NavbarItem {...item} key={i} />)}
      </div>
      <div className="navbar__items navbar__items--right">
      <SearchBar handleSearchBarToggle={setIsSearchBarExpanded} isSearchBarExpanded={isSearchBarExpanded} style='dark'/>

        <ColorModeToggleWrapper/>
        {rightItems.map((item, i) => <NavbarItem {...item} key={i} />)}
        
      </div>
    </div>
    <div role="presentation" className="navbar-sidebar__backdrop" onClick={hideSidebar} />
    <div className={clsx(styles.navbar__sidebar, "navbar-sidebar")}>
      <div className="navbar-sidebar__brand">
        <Logo className={clsx(styles.navbar__brand, "navbar__brand")} imageClassName={clsx(styles.navbar__logo, "navbar__logo")} titleClassName="navbar__title" onClick={hideSidebar} />
      </div>
      <div className="navbar-sidebar__items">
        <div className="menu">
          <ul className="menu__list">
            {items.map((item, i) => <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />)}
          </ul>
        </div>
      </div>
    </div>
  </nav>;
}

export default Navbar;