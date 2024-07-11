import { Link, Navigate, Route, Routes } from 'react-router-dom'
import SingleProductPage from './routes/single-page/SinglePage.jsx'
import Home from './routes/home/Home'
import NotFound from "./routes/not-found/NotFound"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/single-product/:productId" element={<SingleProductPage />}/>
        <Route path='not-found' element={<NotFound/>} />
        <Route path='*' element={<Navigate to='/not-found'/>} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
