import VirtualTryOnStyle from "./VirtualTryOn.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { NavLink } from "react-router-dom";

// Placeholder image - replace with actual image
import TryOnImg from "../../../assets/images/app/app_screen_iii.png";

const VirtualTryOn = ({ darkMode }) => {
  return (
    <VirtualTryOnStyle darkMode={darkMode}>
      <div className="decoration decoration-top"></div>
      <div className="decoration decoration-bottom"></div>
      
      <div className="container">
        <div className="tryon-wrapper">
          <ScrollAnimate>
            <div className="tryon-content">
              <h2 id="prova-virtuale">Prova virtualmente i tuoi <span>vestiti</span></h2>
              <p>
                Vedi come ti stanno i vestiti senza doverli indossare fisicamente. 
                Outfit Match utilizza la tecnologia avanzata per mostrare come ogni capo 
                si adatta alla tua silhouette.
              </p>
              
              <ol className="steps-list">
                <li>
                  <div className="step-content">
                    <h4>Crea la tua silhouette</h4>
                    <p>
                      Carica una tua foto o scegli un modello che rispecchi la tua corporatura.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="step-content">
                    <h4>Seleziona i vestiti</h4>
                    <p>
                      Scegli i capi dal tuo guardaroba virtuale che vuoi provare.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="step-content">
                    <h4>Visualizza il risultato</h4>
                    <p>
                      Vedi immediatamente come ti stanno i vestiti e crea combinazioni perfette.
                    </p>
                  </div>
                </li>
              </ol>
              
              <NavLink to="/sign-up" className="tryon-btn">
                Prova Subito
              </NavLink>
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate delay={100}>
            <div className="tryon-image">
              <div className="image-wrapper">
                <img src={TryOnImg} alt="Prova virtuale" />
              </div>
              
              <div className="overlay-graphics">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </VirtualTryOnStyle>
  );
};

export default VirtualTryOn;