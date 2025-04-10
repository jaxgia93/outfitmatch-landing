import { HashRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop";
import OutfitMatch from "./pages/outfit-match";
import PrivacyPolicy from "./pages/privacy-policy";
import CookiePolicy from "./pages/cookie-policy";
import Terms from "./pages/terms";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<OutfitMatch />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default App;