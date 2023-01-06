import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowDetailPage from "./Pages/ShowDetails.Page";
import ShowListPage from "./Pages/ShowsList.Page";

function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowListPage />} />
          <Route path="show/:show_id" element={<ShowDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
