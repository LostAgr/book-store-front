import React from "react";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Route, Routes } from 'react-router-dom'
import { Notfound } from "./pages/notfound";
import { Bookstore } from "./pages/book-store";

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/book-store" element={<Bookstore />} />
      </Routes>
    </div>
  );
}

export default App;