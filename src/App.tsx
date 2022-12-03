import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Genre from "./pages/Genre";
import Home from "./pages/Home";
import SearchDetail from "./pages/SearchDetail";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/manga/detail/:key" element={<Detail />} />
          <Route path="/:key" element={<SearchDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
