import { Route,Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
 
const App = () => {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
    </Routes>
  );
};


export default App;