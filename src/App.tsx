import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageWrapper from "./wrappers/PageWrapper";
import { NewCampaign } from "./pages/NewCampaignPage/NewCampaignPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { EditCampaignPage } from "./pages/EditCampaignPage/EditCampaignPage";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/new" element={<NewCampaign />} />
          <Route path="/:id/campaign" element={<EditCampaignPage />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
