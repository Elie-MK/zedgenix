"use client";
import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

function Layout({ children }: { children: React.ReactNode }) {

  return (
      <main>
        <NavBar  />
        {children}
        <Footer />
      </main>
  );
}

export default Layout;
