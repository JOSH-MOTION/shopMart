import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/Home';
import About from './components/about';
import Contact from './components/contact';
import Product from './components/product';
import Details from './components/details';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product/>} />
       <Route path='/product/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App