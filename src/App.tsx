import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Recommended from "./pages/Recommended";
import SearchDetail from "./pages/SearchDetail";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/manga/detail/:key" element={<Detail />} />
          <Route path="/:key" element={<SearchDetail />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
