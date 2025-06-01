import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampaignFormPage from "./pages/CampaignFormPage/CampaignFormPage";
import PageWrapper from "./wrappers/PageWrapper";

function App() {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/campaigns/new"
            element={<CampaignFormPage mode="create" />}
          />
        </Routes>
      </BrowserRouter>
    </PageWrapper>
  );
}

export default App;
