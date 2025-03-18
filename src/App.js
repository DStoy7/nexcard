import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dimitar from './pages/Dimitar'; // Ensure it's exported as a default React component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dimitar" element={<Dimitar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
