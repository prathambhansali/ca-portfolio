'use client';

import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  isFinished: boolean;
  markAsFinished: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isFinished, setIsFinished] = useState(false);

  const markAsFinished = () => setIsFinished(true);

  return (
    <LoadingContext.Provider value={{ isFinished, markAsFinished }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
