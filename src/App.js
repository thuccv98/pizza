import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData } from './data/productData';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Chose your favorite" data={productData} />
    </Router>
  );
}

export default App;
