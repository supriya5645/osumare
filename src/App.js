import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import LandscapePage from './components/LandscapePage';
import Conversation from './components/Conversation';
import Enquiry from './components/Enquiry';
import Partners from './components/Partners';
import FAQPage from './components/FAQ';
import Form from './components/Form';
import Footer from './components/Footer';
import DigitalMistry from './components/DigitalMistry';





function App() {
  return (
    <>
    <Header/>
    <Home/>
    <DigitalMistry/>
    <Service/>
    <LandscapePage/>
    <Conversation/>
    <Enquiry/>
    <Partners/>
    <FAQPage/>
    <Form/>
    <Footer/>
    </>
  );
}

export default App;
