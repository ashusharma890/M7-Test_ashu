import './App.css';
import React,{useState} from 'react'
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import LastFooter from './components/LastFooter';
import Form from './components/Form';


function App() {
  const [num, setNum] = useState(1);
  return (
    <div className="App">
     <Navbar cart={num}/>
     <Banner/>
     <Products setNum={setNum} num={num}/>
     <Footer/>
     <div className="part">
        <LastFooter name="Company Info" link_one="About Us" link_two="Carrier" link_three="We are hiring" link_four="Blog"/>
        <LastFooter name="Legal" link_one="About Us" link_two="Carrier" link_three="We are hiring" link_four="Blog"/>
        <LastFooter name="Features" link_one="Business Marketing" link_two="User Analyticr" link_three="Live Chat" link_four="Unlimited Support"/>
        <LastFooter name="Resources" link_one="IOS & Android" link_two="Watch a Demo" link_three="Customers" link_four="API"/>
      <Form name="Get in touch"/>
     </div>
    </div>
  );
}

export default App;
