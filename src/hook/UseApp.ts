import React, { useState, useMemo } from 'react';

export type UseAppMethods = {
  authUser: any;
  setAuthUser: (user: any) => void;
};

export const useApp = (): UseAppMethods => {
  const [authUser, setAuthUser] = useState<any>();

  return {
    authUser,
    setAuthUser,
  };
};
