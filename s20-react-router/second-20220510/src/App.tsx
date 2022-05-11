import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AllQuotes } from "./pages/AllQuotes";
import { QuoteDetail } from "./pages/QuoteDetail";
import { NewQuote } from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/quotes/" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/newQuote" element={<NewQuote />} />

          <Route path="/*" element={<NotFound />}></Route>
          {/* <Route path="/*" element={<Navigate replace to="/quotes" />}></Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
