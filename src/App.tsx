import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageWrapper from "./wrappers/PageWrapper";
import { NewCampaign } from "./pages/NewCampaignPage/NewCampaignPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { EditCampaignPage } from "./pages/EditCampaignPage/EditCampaignPage";
import { CampaignProvider } from "./providers";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <CampaignProvider>
        <PageWrapper>
          <Routes>
            <Route path={ROUTES.LANDING} element={<LandingPage />} />
            <Route path={ROUTES.NEW_CAMPAIGN} element={<NewCampaign />} />
            <Route path={ROUTES.EDIT_CAMPAIGN} element={<EditCampaignPage />} />
          </Routes>
        </PageWrapper>
      </CampaignProvider>
    </BrowserRouter>
  );
}

export default App;
