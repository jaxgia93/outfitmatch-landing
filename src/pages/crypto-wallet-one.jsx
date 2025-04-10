import { useState } from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import OutfitMatchBanner from "../Sections/Banner/OutfitMatchBanner/OutfitMatchBanner";
import OutfitFeatures from "../Sections/OutfitMatch/OutfitFeatures/OutfitFeatures";
import WardrobeManagement from "../Sections/OutfitMatch/WardrobeManagement/WardrobeManagement";
import VirtualTryOn from "../Sections/OutfitMatch/VirtualTryOn/VirtualTryOn";
import CrossPlatform from "../Sections/OutfitMatch/CrossPlatform/CrossPlatform";
import PrivacySecurity from "../Sections/OutfitMatch/PrivacySecurity/PrivacySecurity";
import UserFeedback from "../Sections/OutfitMatch/UserFeedback/UserFeedback";
import DownloadApp from "../Sections/OutfitMatch/DownloadApp/DownloadApp";
import OutfitMatchFooter from "../Sections/Footer/OutfitMatchFooter";
import { ThemeProvider } from "styled-components";
import TemplateStyles from "../assets/styles/TemplateStyles";

const OutfitMatch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-scheme');
  };

  return (
    <ThemeProvider theme={TemplateStyles}>
      <Layout pageTitle={"Outfit Match | Indossa la migliore versione di te"} scrollVariant={"outfit"}>
        <div className={`outfit-match-body ${darkMode ? 'dark-mode' : 'light-mode'}`}>
          <Header variant={"outfit"} darkMode={darkMode} toggleTheme={toggleTheme} />
          <OutfitMatchBanner darkMode={darkMode} />
          <OutfitFeatures darkMode={darkMode} />
          <WardrobeManagement darkMode={darkMode} />
          <VirtualTryOn darkMode={darkMode} />
          <CrossPlatform darkMode={darkMode} />
          <PrivacySecurity darkMode={darkMode} />
          <UserFeedback darkMode={darkMode} />
          <DownloadApp darkMode={darkMode} />
          <OutfitMatchFooter darkMode={darkMode} />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default OutfitMatch;