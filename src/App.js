import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import MyTasks from "./Pages/MyTasks";
import Settings from "./Pages/Settings";
import Account from "./Pages/Account";
import Signup from "./Pages/Signup";
import Navigation from "./Components/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "./Components/Sidebar";

function App() {
  const user=useSelector(state=>state.user.data)
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {
        user&&(
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-tasks" element={<MyTasks />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/account" element={<Account />} />
          </>
          )
        }
        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
