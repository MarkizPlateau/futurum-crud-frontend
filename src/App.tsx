import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageWrapper from "./wrappers/PageWrapper";
import { NewCampaign } from "./pages/NewCampaign/NewCampaign";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/new" element={<NewCampaign />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
