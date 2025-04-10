import React, { useState } from "react";
import DownloadAppStyle from "./DownloadApp.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Placeholder image - replace with actual image
import PatternBg from "../../../assets/images/crypto/banner-graphics.svg";

const BetaSignupForm = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email) {
      setError("Per favore inserisci un indirizzo email.");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Per favore inserisci un indirizzo email valido.");
      return;
    }
    
    // In un'implementazione reale, qui invieresti i dati a un server
    console.log("Email submitted:", email);
    
    // Mostra messaggio di successo
    setSubmitted(true);
  };

  return (
    <DownloadAppStyle darkMode={darkMode} bgPattern={PatternBg}>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      
      <div className="container">
        <ScrollAnimate>
          <div className="download-wrapper">
            <div className="beta-content">
              <div className="beta-text">
                <h2 id="download">Partecipa alla Beta di Outfit Match</h2>
                {!submitted ? (
                  <p>
                    Sei interessato a provare Outfit Match prima del suo lancio ufficiale? 
                    Iscriviti ora alla nostra fase beta e i primi 100 iscritti riceveranno 
                    <span className="highlight"> due mesi di generazione outfit gratuita</span> in 
                    cambio di feedback sulla loro esperienza.
                  </p>
                ) : (
                  <p className="success-message">
                    Grazie per esserti iscritto alla beta di Outfit Match! 
                    Ti contatteremo presto con ulteriori informazioni.
                  </p>
                )}
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="beta-form">
                    <div className="form-group">
                      <input 
                        type="email" 
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Il tuo indirizzo email"
                        className={error ? "error" : ""}
                      />
                      <button type="submit" className="submit-btn">
                        Iscriviti alla Beta
                      </button>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="form-note">
                      Offerta limitata ai primi 100 partecipanti. Riceverai un'email di conferma.
                    </div>
                  </form>
                ) : (
                  <div className="confirmation-box">
                    <div className="confirmation-icon">✓</div>
                    <div className="confirmation-text">
                      Iscrizione completata con successo!
                    </div>
                  </div>
                )}
              </div>
              
              <div className="beta-features">
                <div className="features-wrapper">
                  <h3>Cosa include la Beta?</h3>
                  <ul className="features-list">
                    <li>
                      <div className="feature-icon">✓</div>
                      <div className="feature-text">Accesso anticipato all'app</div>
                    </li>
                    <li>
                      <div className="feature-icon">✓</div>
                      <div className="feature-text">Due mesi di generazione gratuita</div>
                    </li>
                    <li>
                      <div className="feature-icon">✓</div>
                      <div className="feature-text">Assistenza prioritaria</div>
                    </li>
                    <li>
                      <div className="feature-icon">✓</div>
                      <div className="feature-text">Influenza sullo sviluppo futuro</div>
                    </li>
                  </ul>
                  <div className="features-footer">
                    I primi 100 iscritti saranno contattati via email con i dettagli per accedere alla beta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </DownloadAppStyle>
  );
};

export default BetaSignupForm;