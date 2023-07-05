import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/style.css';
import Destinationpage from "./pages/destinationpage";
import Tech from "./pages/tech";
import Crew from "./pages/crewpage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='Space-Tourism' element={<Homepage />} />
          <Route path='/destination' element={<Destinationpage/>} />
          <Route path='/crew' element={<Crew/>} />
          <Route path='/technology' element={<Tech/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
