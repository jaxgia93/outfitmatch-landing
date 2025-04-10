import OutfitFeaturesStyle from "./OutfitFeatures.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

// Placeholder icons - replace with actual icons
import Icon1 from "../../../assets/images/app/app-features-icon1.svg";
import Icon2 from "../../../assets/images/app/app-features-icon2.svg";
import Icon3 from "../../../assets/images/app/app-features-icon3.svg";
import Icon4 from "../../../assets/images/app/app-features-icon4.svg";
import Icon5 from "../../../assets/images/app/calendar.svg";
import Icon6 from "../../../assets/images/app/favorite-chart.svg";

const OutfitFeatures = ({ darkMode }) => {
  const features = [
    {
      id: 1,
      icon: Icon1,
      title: "Cataloga il tuo guardaroba",
      description: "Organizza i tuoi vestiti per categoria, colore, stagione e occasione. Tieni tutto sotto controllo."
    },
    {
      id: 2,
      icon: Icon2,
      title: "Foto automatiche",
      description: "Scatta una foto ai tuoi capi e l'app rimuove automaticamente lo sfondo per una visualizzazione perfetta."
    },
    {
      id: 3,
      icon: Icon3,
      title: "Suggerimenti di outfit",
      description: "Ricevi consigli personalizzati basati sul tuo guardaroba, stile personale e occasione."
    },
    {
      id: 4,
      icon: Icon4,
      title: "Prova virtuale",
      description: "Crea la tua silhouette e vedi come ti stanno i vestiti senza doverli indossare fisicamente."
    },
    {
      id: 5,
      icon: Icon5,
      title: "Pianificazione outfit",
      description: "Pianifica i tuoi outfit per la settimana e ricevi notifiche per prepararti in anticipo."
    },
    {
      id: 6,
      icon: Icon6,
      title: "Analisi di stile",
      description: "Ottieni statistiche sui capi che indossi più spesso e suggerimenti per valorizzare il tuo guardaroba."
    }
  ];

  return (
    <OutfitFeaturesStyle darkMode={darkMode}>
      <div className="container">
        <ScrollAnimate>
          <div className="section-title">
            <h2>Funzionalità di <span>Outfit Match</span></h2>
            <p>
              Gestisci e visualizza il tuo guardaroba come mai prima d'ora con le nostre caratteristiche innovative.
            </p>
          </div>
        </ScrollAnimate>

        <div className="features-wrapper">
          {features.map((feature, index) => (
            <ScrollAnimate key={feature.id} delay={index * 100}>
              <div className="feature-item">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </OutfitFeaturesStyle>
  );
};

export default OutfitFeatures;