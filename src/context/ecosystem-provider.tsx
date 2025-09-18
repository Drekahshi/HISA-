'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type Ecosystem = 'jani' | 'umoja' | 'culture';

interface EcosystemState {
  ecosystem: Ecosystem;
  setEcosystem: (ecosystem: Ecosystem) => void;
}

export const EcosystemContext = createContext<EcosystemState | undefined>(undefined);

export const EcosystemProvider = ({ children }: { children: ReactNode }) => {
  const [ecosystem, setEcosystem] = useState<Ecosystem>('jani');
  const pathname = usePathname();

  useEffect(() => {
    // Automatically switch ecosystem based on the current page
    if (pathname.startsWith('/umoja')) {
      setEcosystem('umoja');
    } else if (pathname.startsWith('/chat')) {
      setEcosystem('culture');
    } else {
      setEcosystem('jani');
    }
  }, [pathname]);

  const value = {
    ecosystem,
    setEcosystem,
  };

  return (
    <EcosystemContext.Provider value={value}>
      {children}
    </EcosystemContext.Provider>
  );
};

export const useEcosystem = () => {
  const context = useContext(EcosystemContext);
  if (context === undefined) {
    throw new Error('useEcosystem must be used within an EcosystemProvider');
  }
  return context;
};
