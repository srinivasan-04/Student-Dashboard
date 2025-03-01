import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const SidebarContext = createContext();

// Provide the context
export const SidebarProvider = ({ children }) => {
  const [currentTitle, setCurrentTitle] = useState("Dashboard");
  const [name, setName] = useState(localStorage.getItem("username") || ""); // Load from localStorage

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (name) {
      localStorage.setItem("username", name);
    }
  }, [name]);

  return (
    <SidebarContext.Provider value={{ currentTitle, setCurrentTitle, name, setName }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the context
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
