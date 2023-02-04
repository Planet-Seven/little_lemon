import './App.css';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js'
import {Routes, Route} from 'react-router-dom'
import BookingPage from './components/BookingPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/booking" element={<BookingPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
