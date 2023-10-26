import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Set search placeholder text
          const inputElement = document.getElementById('docsearch-input');
          if (inputElement) {
            if (inputElement.placeholder !== 'Search 8base') {
              inputElement.placeholder = 'Search 8base';
            }
          }

          // Add 'Recent Searches' text if there are no recent searches
          const noRecentSearches = document.querySelector('.DocSearch-Help');
          if (
            noRecentSearches &&
            !document.querySelector('.DocSearch-Hit-source')
          ) {
            if (noRecentSearches.innerHTML !== 'no recent searches found') {
              noRecentSearches.innerHTML = 'no recent searches found';
              if (!document.querySelector('.docSearchRecent')) {
                const recentSearchesElement = document.createElement('div');
                recentSearchesElement.innerHTML = 'Recent Searches';
                recentSearchesElement.classList.add('docSearchRecent');
                document
                  .querySelector('.DocSearch-Dropdown')
                  .prepend(recentSearchesElement);
              }
            }
          }

          // Remove 'Recent Searches' from above if the original is shown
          if (document.querySelector('.DocSearch-Hit-source')) {
            if (document.querySelector('.docSearchRecent')) {
              document.querySelector('.docSearchRecent').remove();
            }
          }

          // Disable auto selection of first entry in the list for search
          document.querySelector('.DocSearch-Hit[aria-selected="true"]') &&
            document
              .querySelector('.DocSearch-Hit[aria-selected="true"]')
              .setAttribute('aria-selected', 'false');

          //
          const recentElement = document.querySelector('.DocSearch-Hit-source');
          if (
            recentElement &&
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
