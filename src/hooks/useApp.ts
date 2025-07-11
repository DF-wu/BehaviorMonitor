/**
 * Custom hook for accessing the App Context
 * 
 * This hook provides access to the global application state and actions.
 * It must be used within an AppProvider component tree.
 * 
 * @returns {AppContextType} The app context value containing state and actions
 * @throws {Error} If used outside of AppProvider
 */

import { useContext } from 'react';
import { AppContext } from '../context/AppContextDefinition';

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
