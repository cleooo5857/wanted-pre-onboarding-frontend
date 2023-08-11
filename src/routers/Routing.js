import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Joinpage from "../pages/joinpage";
import Loginpage from "../pages/loginpage";
import PrivateRoute from "./PrivateRoute";
import TodoPage from "../pages/todopage";
import { TokenRepository } from "../repository/TokenRepository";

function Routing() {
  console.log(TokenRepository.getToken());

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
