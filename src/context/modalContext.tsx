"use client"; // Ensure it's a Client Component

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  closeModal: boolean;

  handleCloseModal: (value: boolean) => void;
};

// Create the context with default values
const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [closeModal, setCloseModal] = useState(false);
  const handleCloseModal = (value: boolean) => {
    setCloseModal(value);
  };
  return <ModalContext.Provider value={{ closeModal, handleCloseModal }}>{children}</ModalContext.Provider>;
};

// Custom hook for consuming the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
