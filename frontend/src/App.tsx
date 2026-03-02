import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { useLocation } from "react-router-dom";
import ProjectCards from "./components/ProjectCards";
import { AuthContextProvider } from "./context/AuthContext";
import { useEffect } from "react";
import { supabase } from "./supabaseClient";

import ProtectedRoute from "./components/ProtectedRoute";
import NewProject from "./pages/NewProject";



const App = () => {
  let location = useLocation();

  useEffect(() => {
  const testConnection = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error("❌ Supabase auth error:", error.message);
    } else {
      console.log("✅ Supabase is connected!", data);
    }
  };

  testConnection();
}, []);

  return (
    <>

      <AuthContextProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="/projects/new" element={<ProtectedRoute><NewProject /></ProtectedRoute>} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          {location.pathname === "/" && <About />}
        </main>
      </AuthContextProvider>
    </>
  );
};

export default App;
