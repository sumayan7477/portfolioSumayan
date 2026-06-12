// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from "react-router-dom";
import Cursor from "./Cursor";

import Homenu from "./Homenu";
import Loader from "./Loader";
// import Counter from './count'
// import Friends from './friends'
import Navbar from "./Navbar";
import ProgressScroll from "./ProgressScroll";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Loader></Loader>
      <Cursor></Cursor>
      <ProgressScroll></ProgressScroll>
      <div id="smooth-wrapper">
        <Navbar></Navbar>
        <Homenu></Homenu>
        <div id="smooth-content">
          <main className="main-bg">
          <Outlet></Outlet>
          </main>
        </div>
        
      </div>
    </>
  );
}
// function Person(){
//   const age = 21
//   return <h3> i am sumaiya with age {age}</h3>
// }

export default App;
