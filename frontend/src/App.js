
import { useEffect, useState } from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import Items from './components/items/items';
import Payments from './components/payments/payments';
import Card from "../src/components/gallery/ShoppingCart.png"
import Arrow from "../src/components/gallery/Vector 60.png"
import ApiUtils from './lib/api-utils';

function App() {

  const [showItems, setShowItems] = useState(false)

  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await ApiUtils.getCountriesData();
      setCountries(countriesData);

      const uniqueRegions = new Map();
      countriesData.forEach((country) => {
        if (country.subregion && !uniqueRegions.has(country.subregion)) {
          uniqueRegions.set(country.subregion);
        }
      })
      const regionsArray = Array.from(uniqueRegions, ([subregion]) => ({
        subregion,
      }));

      setRegions(regionsArray);
    };

    fetchData();
  }, []);

  const toggleItems = () => {
    setShowItems(!showItems)
  }
  return (
    <div className="app">
      <div className='content'>
        <div className="items-header" onClick={toggleItems}>
{/* order-summary */}
          <div className='about-header-order'>
            <img className='card' src={Card} alt='card' />
            {/* order-title */}
            <h2 className='header-title'>ORDER SUMMARY</h2>
            <img className={`arrow ${showItems ? 'up' : 'down'}`} src={Arrow} alt='a=' />
          </div>
          {/* order-price */}
          <p className='header-price'>$49.98</p>
        </div>
        <div className={`items-side ${showItems ? 'active' : ''}`}>
          <Items />
        </div>
        <div className='main'>
          <div className='payment-side'>
            <div className='payments'>
              <h2 className='form-title'>PAYMENT AND SHIPPING </h2>
              <Payments countries={countries} regions={regions} />
            </div>
          </div>
          <div className='items-for-destop'>
            <Items />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
