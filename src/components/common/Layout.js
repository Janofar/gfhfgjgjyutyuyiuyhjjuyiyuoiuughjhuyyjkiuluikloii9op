import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />
        {/* Dashboard Content */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
