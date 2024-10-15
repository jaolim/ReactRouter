import './App.css'

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>React Router</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
