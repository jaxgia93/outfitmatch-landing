import { useEffect } from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import OutfitMatchFooter from "../Sections/Footer/OutfitMatchFooter";
import TermsAndPrivacy from "../Sections/TermsAndPrivacy/TermsAndPrivacy";
import privacyPolicyData from "../assets/data/privacyPolicy";
import { ThemeProvider } from "styled-components";
import TemplateStyles from "../assets/styles/TemplateStyles";

const PrivacyPolicy = () => {
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
      <Layout pageTitle={"Privacy Policy | OutfitMatch"} scrollVariant={"outfit"}>
        <div className="outfit-match-body dark-mode">
          <Header variant={"outfit"} darkMode={darkMode} />
          <TermsAndPrivacy title="Privacy Policy" data={privacyPolicyData}>
            <p className="intro-text">
              Outfit Match si impegna a proteggere la tua privacy e i tuoi dati personali. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e condividiamo le tue informazioni quando utilizzi i nostri servizi.
            </p>
          </TermsAndPrivacy>
          <OutfitMatchFooter darkMode={darkMode} />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;