import { Outlet } from "react-router";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;