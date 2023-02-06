import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Girl from "./Girl";
import Boy from "./Boy";

function App() {
  return (
    <div className="App">
      <Link to='/girl'>主应用-美女</Link>
      <br />
      <Link to='/boy'>主应用-帅哥</Link>

      <Routes>
        <Route path='girl' element={<Girl />} />
        <Route path='boy' element={<Boy />} />
      </Routes>
    </div>
  );
}

export default App;
