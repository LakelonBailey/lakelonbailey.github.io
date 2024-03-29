import React, { createContext, useState } from 'react';

export const PageTransitionContext = createContext();

export const PageTransitionProvider = ({ children }) => {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);

  return (
    <PageTransitionContext.Provider value={{ isPageTransitioning, setIsPageTransitioning }}>
      {children}
    </PageTransitionContext.Provider>
  );
};
