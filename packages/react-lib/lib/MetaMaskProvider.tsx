import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';
import Web3 from 'web3';

interface MetaMaskContextValues {
  account: string | null;
  isConnected: boolean;
  isInstalled: boolean;
  connectToMetaMask: () => Promise<void>;
}

// Extend the Window interface to include the ethereum property
interface CustomWindow extends Window {
  ethereum?: any;
}

// Step 2: Create a new React context
export const MetaMaskContext = createContext<MetaMaskContextValues | undefined>(undefined);

interface MetaMaskProviderProps {
  children: ReactNode;
}

export function MetaMaskProvider({ children }: MetaMaskProviderProps) {
  // Step 3: Implement the context state
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    checkIfMetaMaskIsInstalled();
  }, []);

  const checkIfMetaMaskIsInstalled = () => {
    // Use the custom window interface
    const customWindow = window as CustomWindow;
    if (typeof customWindow.ethereum !== 'undefined') {
      setIsInstalled(true);
      if (customWindow.ethereum.selectedAddress) {
        setAccount(customWindow.ethereum.selectedAddress);
        setIsConnected(true);
      }
    } else {
      setIsInstalled(false);
    }
  };

  const connectToMetaMask = async () => {
    try {
      // Use the custom window interface
      const customWindow = window as CustomWindow;
      if (typeof customWindow.ethereum !== 'undefined') {
        const web3 = new Web3(customWindow.ethereum);
        await customWindow.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);
      } else {
        console.log('Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  // Step 4: Return the necessary values from the custom hook
  const metaMaskValues: MetaMaskContextValues = {
    account,
    isConnected,
    isInstalled,
    connectToMetaMask,
  };

  // Step 5: Wrap the application with the provider component
  return (
    <MetaMaskContext.Provider value={metaMaskValues}>
      {children}
    </MetaMaskContext.Provider>
  );
}

// Export the custom hook and the context
export function useMetaMaskConnect() {
  const context = useContext(MetaMaskContext);
  if (!context) {
    throw new Error('useMetaMaskConnect must be used within a MetaMaskProvider');
  }
  return context;
}