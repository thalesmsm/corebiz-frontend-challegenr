import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductsCarousel from './components/Products';
import News from './components/News';
import Footer from './components/Footer';
import Provider from './context/Context';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Banner />
        <ProductsCarousel />
        <News />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
