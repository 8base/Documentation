import OriginalSidebar from '@theme-original/DocSidebar';
import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function DocSidebar(props) {
  const location = useLocation();

  useEffect(() => {
    function styleSiblingElements() {
      // Remove existing sibling-style class from all elements
      document.querySelectorAll('.sibling-style').forEach((el) => {
        el.classList.remove('sibling-style');
      });

      const selectedElement = document.querySelector('aside [aria-current]');
      const isSubmenu = selectedElement.getAttribute('aria-expanded');

      if (selectedElement) {
        if (isSubmenu) {
          // Exit if top menu
          if (
            Array.from(
              selectedElement.parentElement.parentElement.classList
            ).some((className) => className.includes('level-1'))
          ) {
            return;
          }

          // For level 2 or deeper, add styles
          const elements = Array.from(
            selectedElement.parentElement.nextElementSibling.children
          );
          elements.forEach((element) => {
            element.querySelector('a').classList.add('sibling-style');
          });
        } else {
          const siblingElements = Array.from(
            selectedElement.parentElement.parentElement.children
          );

          siblingElements.forEach((sibling) => {
            if (sibling !== selectedElement.parentElement) {
              sibling.children[0].classList.add('sibling-style');
            }
          });
        }
      }
    }

    // Call the function to style sibling elements
    styleSiblingElements();
  }, [location.pathname]); // Dependency array includes the pathname, so this runs on route changes

  return (
    <>
      {/* <FrameworkSelector /> */}
      <OriginalSidebar {...props} />
    </>
  );
}
