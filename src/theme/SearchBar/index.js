import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const inputElement = document.getElementById('docsearch-input');
          if (inputElement) {
            inputElement.placeholder = 'Search 8base';
          }
          const recentElement = document.querySelector('.DocSearch-Hit-source');
          if (
            recentElement.innerHTML !== ('Recent Searches' || 'Search Results')
          ) {
            if (recentElement.innerHTML === 'Recent') {
              recentElement.innerHTML = 'Recent Searches';
            }
            if (recentElement.innerHTML === 'Documentation') {
              recentElement.innerHTML = 'Search Results';
            }
          }
          const containerElements = document.querySelectorAll(
            '.DocSearch-Hit-Container'
          );
          containerElements.forEach((containerElement) => {
            const existingImgElement = containerElement.querySelector('img');
            if (!existingImgElement) {
              const imgElement = document.createElement('img');
              imgElement.src = '/img/right_charcoal.svg';
              imgElement.className = 'charcoal-arrow';
              containerElement.appendChild(imgElement);

              const imgElement2 = document.createElement('img');
              imgElement2.src = '/img/right_blue.svg';
              imgElement2.className = 'blue-arrow';
              containerElement.appendChild(imgElement2);
            }
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SearchBar {...props} />
    </>
  );
}
