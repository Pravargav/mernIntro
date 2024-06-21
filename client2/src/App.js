import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Bid } from "./pages/bid/bid";
import { ShopContextProvider } from "./context/shop-context";
import { VerifyAdmin } from "./verify/verifyAdmin";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<VerifyAdmin />} />
            <Route path="/user" element={<Shop />} />
            <Route path="/admin" element={<Bid />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
