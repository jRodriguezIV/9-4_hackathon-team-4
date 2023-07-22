import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Common/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Router>
      <Routes>
      {/* <Route> */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
