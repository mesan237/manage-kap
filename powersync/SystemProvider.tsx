import { ReactNode, useEffect, useState } from 'react';
import { System, SystemContext } from './system';

export const SystemProvider = ({ children }: { children: ReactNode }) => {
  const [system] = useState(() => new System());

  useEffect(() => {
    system.init();
  }, []);

  return <SystemContext.Provider value={system}>{children}</SystemContext.Provider>;
};
