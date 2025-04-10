import { useEffect } from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import OutfitMatchFooter from "../Sections/Footer/OutfitMatchFooter";
import TermsAndPrivacy from "../Sections/TermsAndPrivacy/TermsAndPrivacy";
import cookiePolicyData from "../assets/data/cookiePolicy";
import { ThemeProvider } from "styled-components";
import TemplateStyles from "../assets/styles/TemplateStyles";

const CookiePolicy = () => {
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
      <Layout pageTitle={"Cookie Policy | OutfitMatch"} scrollVariant={"outfit"}>
        <div className="outfit-match-body dark-mode">
          <Header variant={"outfit"} darkMode={darkMode} />
          <TermsAndPrivacy title="Cookie Policy" data={cookiePolicyData}>
            <div className="cookie-policy-content">
              <h3>Informativa sui Cookie</h3>
              <p>
                Questa informativa sui cookie spiega come OutfitMatch ("noi", "nostro") utilizza i cookie e tecnologie simili 
                per riconoscere quando visiti il nostro sito web e la nostra applicazione. Spiega cosa sono queste tecnologie 
                e perché le utilizziamo, nonché i tuoi diritti di controllare il nostro utilizzo di queste.
              </p>
            </div>
          </TermsAndPrivacy>
          <OutfitMatchFooter darkMode={darkMode} />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default CookiePolicy;