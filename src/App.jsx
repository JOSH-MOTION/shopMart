import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App