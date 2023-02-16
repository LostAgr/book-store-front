import React from "react";
import { SignIn } from "./pages/sign-in/sign-in";
import { SignUp } from "./pages/sign-up/sign-up";
import { Route, Routes } from 'react-router-dom'
import { Notfound } from "./pages/notfound";
import { Bookstore } from "./pages/book-store";
import { Orderdetails } from "./pages/orderdetails";

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
        <Route path="book-store" element={<Bookstore />} />
        <Route path="order-details" element={<Orderdetails />} />
      </Routes>
    </div>
  );
}

export default App;