import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Collections from './Pages/Collections';
import About from './Pages/About';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import Footer from './Components/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Collections />
    <About />
    <Services />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;
