import { useEffect } from "react";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import OutfitMatchBanner from "../Sections/Banner/OutfitMatchBanner/OutfitMatchBanner";
import OutfitFeatures from "../Sections/OutfitMatch/OutfitFeatures/OutfitFeatures";
import WardrobeManagement from "../Sections/OutfitMatch/WardrobeManagement/WardrobeManagement";
import VirtualTryOn from "../Sections/OutfitMatch/VirtualTryOn/VirtualTryOn";
import CrossPlatform from "../Sections/OutfitMatch/CrossPlatform/CrossPlatform";
import PrivacySecurity from "../Sections/OutfitMatch/PrivacySecurity/PrivacySecurity";
import BetaSignupForm from "../Sections/OutfitMatch/DownloadApp/DownloadApp";
import OutfitMatchFooter from "../Sections/Footer/OutfitMatchFooter";
import { ThemeProvider } from "styled-components";
import TemplateStyles from "../assets/styles/TemplateStyles";

const OutfitMatch = () => {
	// Impostiamo il tema scuro forzato
	const darkMode = true;

	useEffect(() => {
		// Impostiamo la classe dark-scheme sul documento
		document.documentElement.classList.add("dark-scheme");
		// Impostando background e colore sul body
		document.body.style.backgroundColor = "#181818";
		document.body.style.color = "#cccccc";

		// Funzione di cleanup quando il componente viene smontato
		return () => {
			document.documentElement.classList.remove("dark-scheme");
		};
	}, []);

	return (
		<ThemeProvider theme={TemplateStyles}>
			<Layout
				pageTitle={"Outfit Match | Indossa la migliore versione di te"}
				scrollVariant={"outfit"}
			>
				<div className='outfit-match-body dark-mode'>
					<div id='#header'>
						<Header
							variant={"outfit"}
							darkMode={darkMode}
						/>
					</div>
					<OutfitMatchBanner darkMode={darkMode} />
					<div id='#features'>
						<OutfitFeatures darkMode={darkMode} />
					</div>
					<WardrobeManagement darkMode={darkMode} />
					<VirtualTryOn darkMode={darkMode} />
					<CrossPlatform darkMode={darkMode} />
					<PrivacySecurity darkMode={darkMode} />
					<DownloadApp darkMode={darkMode} />
					<OutfitMatchFooter darkMode={darkMode} />
				</div>
			</Layout>
		</ThemeProvider>
	);
};

export default OutfitMatch;
