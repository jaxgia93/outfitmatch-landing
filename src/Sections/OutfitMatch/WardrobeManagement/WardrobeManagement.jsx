import WardrobeManagementStyle from "./WardrobeManagement.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";

// Placeholder image - replace with actual image
import WardrobeImg from "../../../assets/images/app/app_screen_ii.png";
import Icon1 from "../../../assets/images/app/app-features-icon1.svg";
import Icon2 from "../../../assets/images/app/app-features-icon2.svg";
import Icon3 from "../../../assets/images/app/app-features-icon3.svg";

const WardrobeManagement = ({ darkMode }) => {
  return (
    <WardrobeManagementStyle darkMode={darkMode}>
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      
      <div className="container">
        <div className="wardrobe-wrapper">
          <ScrollAnimate>
            <div className="wardrobe-content">
              <h2 id="guardaroba">Gestisci il tuo <span>guardaroba</span> in modo intelligente</h2>
              <p>
                Outfit Match ti permette di catalogare e organizzare tutti i tuoi vestiti in un'unica app, 
                con categorie personalizzate e ricerca avanzata. Non perderai più tempo a cercare 
                cosa indossare.
              </p>
              
              <ul className="category-list">
                <li>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6L9 17l-5-5 1.41-1.42L9 14.17l9.59-9.59L20 6z"/>
                    </svg>
                  </span>
                  Organizzazione per categorie e sottocategorie
                </li>
                <li>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6L9 17l-5-5 1.41-1.42L9 14.17l9.59-9.59L20 6z"/>
                    </svg>
                  </span>
                  Etichettatura con colori, stagioni e occasioni
                </li>
                <li>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6L9 17l-5-5 1.41-1.42L9 14.17l9.59-9.59L20 6z"/>
                    </svg>
                  </span>
                  Ricerca visuale e filtri avanzati
                </li>
                <li>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 6L9 17l-5-5 1.41-1.42L9 14.17l9.59-9.59L20 6z"/>
                    </svg>
                  </span>
                  Storico degli outfit indossati
                </li>
              </ul>
              
              <NavLink to="/sign-up" className="wardrobe-btn">
                Prova Subito
              </NavLink>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate delay={100}>
            <div className="wardrobe-image">
              <div className="image-wrapper">
                <img src={WardrobeImg} alt="Gestione guardaroba" />
              </div>
              
              <div className="category-tag">
                <div className="tag-icon">
                  <img src={Icon1} alt="category" />
                </div>
                <span>T-Shirt</span>
              </div>
              
              <div className="category-tag">
                <div className="tag-icon">
                  <img src={Icon2} alt="category" />
                </div>
                <span>Pantaloni</span>
              </div>
              
              <div className="category-tag">
                <div className="tag-icon">
                  <img src={Icon3} alt="category" />
                </div>
                <span>Accessori</span>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </WardrobeManagementStyle>
  );
};

export default WardrobeManagement;