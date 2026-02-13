'use client';

import { createContext, useContext, useState } from 'react';

interface ButtonContextType {
  activeButton: number;
  setActiveButton: (button: number) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeButton, setActiveButton] = useState(0); // Default to button 1

  return (
    <ButtonContext.Provider value={{ activeButton, setActiveButton }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (context === undefined) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};