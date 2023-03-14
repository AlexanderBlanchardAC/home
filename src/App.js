import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Score from './Pages/Score/Score';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {



  return (
    <Router>
        <div className="App" style={{ backgroundImage: 'url(./images/triangles-background.png' }}>
          <Header />
         
          <Routes>
            <Route path='/' element={<Home  />}/>
            <Route path='quiz' element={<Quiz/>} />
            <Route path='score' element={<Score/>} />
            
          </Routes>
          
          <Footer />
        </div>   
      </Router>    
  );
}

export default App;
