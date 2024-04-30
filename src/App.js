import { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Game from "./components/Game";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import Login from "./components/Login";
import Account from "./components/Account";
import UnityGame from "./components/unityGame";


function App() {
  const [count, setCount] = useState(0);
  
  const aumentar = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/game"
          element={<Game count={count} 
          plus={aumentar} />} 
          />
        
          <Route path="/account" element={<Account />} />

          <Route path="/unityGame" element={<UnityGame />} />

          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
