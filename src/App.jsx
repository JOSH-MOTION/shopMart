import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/Home';
import About from './components/about';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App