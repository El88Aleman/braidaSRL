import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductDetail from "./screens/ProductDetail";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<h1>Error 404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
