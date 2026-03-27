import React from "react";
import { Outlet, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
