import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Joinpage from "../pages/Join/joinPage";
import Loginpage from "../pages/Login/loginPage";
import PrivateRoute from "./PrivateRoute";
import TodoPage from "../pages/Todo/todoPage";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Joinpage />} />
        <Route path="/signin" element={<Loginpage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
