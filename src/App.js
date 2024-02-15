import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'
import Articles from './pages/Articles'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
<div className="bg-light w-full min-h-screen font-family:'Montserrat', sans-serif; dark:bg-dark">
  <Navbar/>
 <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/articles" element={<Articles/>}/>
     <Route path="/projects" element={<Projects/>}/>
 </Routes>
 <Footer/>
</div>
  );
}
export default App;