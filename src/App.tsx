import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageWrapper from "./wrappers/PageWrapper";
import { NewCampaign } from "./pages/NewCampaign/NewCampaign";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/new" element={<NewCampaign />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
