// App.jsx
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Routes>
        {/* Root path */}
        <Route path="/" element={<MovieList />} />

      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}
