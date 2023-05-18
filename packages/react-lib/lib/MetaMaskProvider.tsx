import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';
import Web3 from 'web3';

interface MetaMaskContextValues {
  account: string;
  chainId: string;
  isConnected: boolean;
  isInstalled: boolean;
  connectToMetaMask: () => Promise<void>;
}

interface CustomWindow extends Window {
  ethereum?: any;
}

export const MetaMaskContext = createContext<MetaMaskContextValues | undefined>(undefined);

interface MetaMaskProviderProps {
  children: ReactNode;
}

export function MetaMaskProvider({ children }: MetaMaskProviderProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string>('');
  const [isInstalled, setIsInstalled] = useState(false);
  const [chainId, setChainID] = useState<string>('');

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
        setChainID(customWindow.ethereum.chainId);
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
        setChainID(customWindow.ethereum.chainId);
        setIsConnected(true);
      } else {
        console.log('Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const metaMaskValues: MetaMaskContextValues = {
    account,
    chainId,
    isConnected,
    isInstalled,
    connectToMetaMask,
  };

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