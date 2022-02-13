import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navbar from './components/navs/Navbar';
import Works from './components/works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Works />
    </div>
  );
}

export default App;
