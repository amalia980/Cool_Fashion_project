import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about.js";
import Checkout from "./pages/checkout.js";
import Login from "./pages/login.js";
import Main from "./pages/main/main.js";
import MyAccount from "./pages/myaccount.js";
import Products from "./pages/products.js";
import Pants from "./pages/productpages/pants/pants";
import Outerwear from "./pages/productpages/outerwear/outerwear";
import Skirtsdresses from "./pages/productpages/skirtsdresses/skirtsdresses";
import Tops from "./pages/productpages/tops/tops";
import Shirts from "./pages/productpages/shirts/shirts";
import ShowInDom from "./ShowInDom";
import ScrollToTop from "./scrollToTop.js";
import ArcadiaCollection from "./pages/collectionPages/arcadiaCollection.js";
import StreetCredCollection from "./pages/collectionPages/streetCredCollection.js";
import RodeoCollection from "./pages/collectionPages/rodeoCollection.js";
import Admin from "./pages/admin/admin.js";
import EmailAdmin from "./pages/admin/EmailAdmin.js";
import AddProduct from "./pages/admin/AddProduct.js";
import UpdateFrontAdmin from "./pages/admin/UpdateFrontAdmin.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<ShowInDom />}>
            <Route index element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="checkout" element={<Checkout />}></Route>
            <Route path="myaccount" element={<MyAccount />} />
            {/* Categories */}
            <Route path="pants" element={<Pants />} />
            <Route path="outerwear" element={<Outerwear />} />
            <Route path="skirtsdresses" element={<Skirtsdresses />} />
            <Route path="tops" element={<Tops />} />
            <Route path="shirts" element={<Shirts />} />
             {/* blog/inspiration */}
            <Route path="arcadia" element={<ArcadiaCollection />} />
            <Route path="rodeo" element={<RodeoCollection />} />
            <Route path="streetCred" element={<StreetCredCollection />} />
            {/* admin */}
            <Route path="admin" element={<Admin />} />
            <Route path="emailAdmin" element={<EmailAdmin />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="updateFront" element={<UpdateFrontAdmin/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
