import React, { useState, useEffect, useRef } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';
export default function DocPaginator(props) {
  const { previous, next } = props;

  const [feedback, setFeedback] = useState('');
  const [isHelpful, setIsHelpful] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormFormVisible] = useState(false);

  const handleFeedbackChange = (isHelpful) => {
    setIsFormFormVisible(true);
    setIsHelpful(isHelpful);
  };

  const handleReset = () => {
    setFeedback('');
    setIsHelpful(null);
    setIsFormFormVisible(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://your-feedback-service.com/feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ feedback }),
        }
      );

      if (!response.ok) {
        // Handle non-2xx response (you might also want to check for specific status codes)
        console.error('Failed to submit feedback:', response.statusText);
        return;
      }

      const responseData = await response.json();
      console.log('Feedback submitted successfully:', responseData);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create a ref for your textarea element
  const textareaRef = useRef(null);

  // Use the useEffect hook to focus and scroll to the textarea
  // element when it becomes visible
  useEffect(() => {
    if (isFormVisible && textareaRef.current) {
      // Focus the textarea element
      textareaRef.current.focus();

      // Scroll to the textarea element
      textareaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isFormVisible]);

  return (
    <>
      <nav
        className="pagination-nav docusaurus-mt-lg"
        aria-label={translate({
          id: 'theme.docs.paginator.navAriaLabel',
          message: 'Docs pages',
          description: 'The ARIA label for the docs pagination',
        })}
      >
        {previous && (
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc"
              >
                Previous
              </Translate>
            }
          />
        )}

        {true ? (
          <div
            style={{
              gridColumn: '2/3',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                lineHeight: '18px',
              }}
            >
              Was this article helpful?
            </span>
            {/* Thumb's up */}
            <button
              onClick={() => handleFeedbackChange(true)}
              disabled={isLoading}
              className="clean-btn feedback-btn"
              style={{ height: 24, width: 24, rotate: '180deg', minWidth: 24 }}
            >
              <img src="/img/thumb.svg" alt="thumbs" className="hide-dark" />
              <img
                src="/img/thumb_white.svg"
                alt="thumbs"
                className="hide-light"
              />
            </button>
            {/* Thumb's down */}
            <button
              onClick={() => handleFeedbackChange(false)}
              disabled={isLoading}
              className="clean-btn feedback-btn"
              style={{ height: 24, width: 24, minWidth: 24 }}
            >
              <img src="/img/thumb.svg" alt="thumbs" className="hide-dark" />
              <img
                src="/img/thumb_white.svg"
                alt="thumbs"
                className="hide-light"
              />
            </button>
          </div>
        ) : null}

        {next && (
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate
                id="theme.docs.paginator.next"
                description="The label used to navigate to the next doc"
              >
                Next
              </Translate>
            }
            isNext
          />
        )}
      </nav>

      {isFormVisible ? (
        <form
          onSubmit={handleFormSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <p
            style={{
              marginTop: 24,
              marginBottom: 12,
              fontSize: 12,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {isHelpful
              ? 'Please share your feedback. (optional)'
              : 'Please share your feedback, or let us know how we can improve this article. (optional)'}
          </p>
          <textarea
            ref={textareaRef}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            disabled={isLoading}
            style={{
              width: '100%',
              borderRadius: 6,
              border: '1px solid #61A5FA',
              padding: 8,
            }}
            rows={6}
          />

          {/* Caution message */}
          {!isHelpful ? (
            <div
              style={{
                border: '1px solid #FFCF00',
                borderRadius: 6,
                background: '#FFCF000D',
                marginTop: 12,
                display: 'flex',
                position: 'relative',
              }}
            >
              <img
                src="/img/warning.svg"
                alt="warning"
                height={24}
                width={24}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: 12,
                }}
              />
              <p
                style={{
                  marginBottom: 0,
                  fontSize: 12,
                  padding: '12px 12px 12px 48px',
                }}
              >
                If you encounter an issue or require assistance with a problem,
                please <strong>open a support ticket</strong> instead. Our team
                will respond to tickets that require an answer, or to ask for
                more information when needed.
              </p>
            </div>
          ) : null}

          {/* Buttons */}
          <div style={{ marginTop: 12, gap: 12, alignSelf: 'flex-end' }}>
            <button
              disabled={isLoading}
              style={{
                marginLeft: 'auto',
                marginRight: 12,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#238BFF',
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
              }}
              className="feedback-cancel"
              type="reset"
              onClick={handleReset}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginLeft: 'auto',
                background: !isLoading ? '#238BFF' : '#A3AFB7',
                border: 'none',
                color: '#fff',
                width: 60,
                height: 32,
                borderRadius: 4,
                fontSize: 12,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                boxShadow: '0px 2px 4px 0px #32325D33',
                cursor: 'pointer',
              }}
              className="feedback-submit"
            >
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </>
  );
}
