import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Shop from './Components/Pages/Shop/Shop';
import ProductInfo from './Components/Pages/produceInfo/ProductInfo';
import NewsLetter from './Components/NewsLetterBanner/NewsLetter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="shop" element={<Shop />} />
          <Route exact path="shop/product/:id" element={<ProductInfo />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
