import { useEffect } from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import OutfitMatchFooter from "../Sections/Footer/OutfitMatchFooter";
import TermsAndPrivacy from "../Sections/TermsAndPrivacy/TermsAndPrivacy";
import termsData from "../assets/data/terms";
import { ThemeProvider } from "styled-components";
import TemplateStyles from "../assets/styles/TemplateStyles";

const Terms = () => {
  const darkMode = true;

  useEffect(() => {
    // Impostiamo la classe dark-scheme sul documento
    document.documentElement.classList.add('dark-scheme');
    // Impostando background e colore sul body 
    document.body.style.backgroundColor = "#181818";
    document.body.style.color = "#cccccc";
    
    // Funzione di cleanup quando il componente viene smontato
    return () => {
      document.documentElement.classList.remove('dark-scheme');
    };
  }, []);

  return (
    <ThemeProvider theme={TemplateStyles}>
      <Layout pageTitle={"Termini e Condizioni | OutfitMatch"} scrollVariant={"outfit"}>
        <div className="outfit-match-body dark-mode">
          <Header variant={"outfit"} darkMode={darkMode} />
          <TermsAndPrivacy title="Termini e Condizioni di Utilizzo" data={termsData}>
            <p className="intro-text">
              Benvenuto nei Termini e Condizioni di OutfitMatch. Leggendo e utilizzando la nostra applicazione 
              e i nostri servizi, accetti di rispettare questi termini. Ti preghiamo di leggerli attentamente.
            </p>
          </TermsAndPrivacy>
          <OutfitMatchFooter darkMode={darkMode} />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default Terms;