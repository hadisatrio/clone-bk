import React from "react";
import ClientSide from "./ClientSide";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <ClientSide>
        <Header />
      </ClientSide>
      {children}
      <Footer />
    </>
  );
}
