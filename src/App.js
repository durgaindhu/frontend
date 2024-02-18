import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
//import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="product" element={<Product />}>
          <Route path="productId" element={<Product />}></Route>
          {/* <Route path="/Cart" element={<Cart />} /> */}
          <Route path="/LoginSignup" element={<LoginSignup />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
