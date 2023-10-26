import './App.css';
import './Nav'
import Nav from './Nav';
import Main from './Main';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';


function App() {
  return (
    <div class='container'>
      <Nav />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
