import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (

    <Router>
    <div>

      <Navbar />

    </div>
    </Router>
  )
}

export default App