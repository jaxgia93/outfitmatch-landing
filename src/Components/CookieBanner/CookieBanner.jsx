
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CookieBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.whiteColor};
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};

  @media (max-width: 768px) {
    padding: 15px;
  }

  .cookie-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .cookie-text {
    flex: 1;
    font-size: 14px;
  }

  .cookie-buttons {
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
  }

  button {
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    
    &.accept {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      border: none;
    }

    &.decline {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShow(false);
  };

  return (
    <CookieBannerWrapper show={show}>
      <div className="cookie-content">
        <div className="cookie-text">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, accetti la nostra politica sui cookie.
        </div>
        <div className="cookie-buttons">
          <button className="accept" onClick={handleAccept}>Accetta</button>
          <button className="decline" onClick={handleDecline}>Rifiuta</button>
        </div>
      </div>
    </CookieBannerWrapper>
  );
};

export default CookieBanner;
