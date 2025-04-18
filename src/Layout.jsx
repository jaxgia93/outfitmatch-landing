import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { useEffect } from "react";

const Layout = ({ pageTitle, scrollVariant, children }) => {
  // Aggiungi uno script per gestire le ancore
  useEffect(() => {
    // Gestione degli hash URL all'avvio
    const handleHashOnLoad = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          setTimeout(() => {
            const headerHeight = document.querySelector('.header-section')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
              top: elementPosition - headerHeight - 20,
              behavior: 'smooth'
            });
          }, 300); // Piccolo ritardo per assicurarsi che la pagina sia completamente caricata
        }
      }
    };

    // Gestione del click sulle ancore per lo scorrimento fluido
    const handleAnchorClick = (e) => {
      const target = e.currentTarget;
      
      // Trova il link di destinazione
      if (target.hash) {
        e.preventDefault();
        
        const id = target.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          const headerHeight = document.querySelector('.header-section')?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: elementPosition - headerHeight - 20,
            behavior: 'smooth'
          });
          
          // Aggiorna l'URL con il nuovo hash ma senza ricaricare la pagina
          window.history.pushState(null, null, target.hash);
        }
      }
    };

    handleHashOnLoad();

    // Aggiungi l'evento a tutti i link che puntano ad ancore
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup dell'evento quando il componente viene smontato
    return () => {
      const updatedAnchorLinks = document.querySelectorAll('a[href^="#"]');
      updatedAnchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {/* title tag */}
        {pageTitle ? <title>{pageTitle}</title> : <title>OutfitMatch</title>}

        {/* favicon included here  */}
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

        {/* apple touch icon included here */}
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* All font family included here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/* DM Sans font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        {/* Montserrat Alternates font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Jost font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Fira Code font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap"
          rel="stylesheet"
        />
        {/* Caveat font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap"
          rel="stylesheet"
        />
        {/* Quantico font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Inter font family */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {/* overlay while mobile menu open */}
      <div className="staco-overly-bg"></div>

      {/* content */}
      {children}

      {/* scroll top component */}
      <ScrollTop variant={scrollVariant} />
    </HelmetProvider>
  );
};

export default Layout;