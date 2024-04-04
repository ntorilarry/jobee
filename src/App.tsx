import React from "react";
import AppRouter from "./utils/AppRouter";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />;
      <Footer />
    </>
  );
};

export default App;
