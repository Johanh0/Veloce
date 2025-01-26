import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Product from "./pages/Product";

export const Context = createContext();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isSignedIn")) || false;
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  return (
    <Context.Provider value={{ isSignedIn, setIsSignedIn, user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
