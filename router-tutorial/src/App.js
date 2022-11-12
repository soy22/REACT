import { Route,Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
 
const App = () => {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
    </Routes>
  );
};


export default App;