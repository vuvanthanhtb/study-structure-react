import React, { useState, createContext, useContext } from "react";

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        setCollapsed,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
