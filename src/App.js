import './App.css';
import './Nav'
import Nav from './Nav';
import Main from './Main';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Book from './Book';


function App() {
  return (
    <div class='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/book' element={<Book />} />
      </Routes>


      <Footer />
    </div>
  );
}


export default App;
