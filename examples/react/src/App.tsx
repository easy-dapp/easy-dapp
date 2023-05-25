import { useMetaMaskConnect } from "@easy-dapp/react";
import { weiToEther, getBalance } from "@easy-dapp/core";
import { useState } from "react";

function App() {
  const { account, chainId, isConnected, isInstalled, connectToMetaMask } =
    useMetaMaskConnect();
  const [etherBalance, setEtherBalance] = useState<number | undefined>();

  async function test() {
    const balance = await getBalance(account, chainId);
    const EtherBalance = weiToEther(balance);
    setEtherBalance(EtherBalance);
  }

  if (isConnected) {
    return (
      <>
        <h1>React Example</h1>
        <button onClick={() => test()}>GetBalance</button>
        <p>{etherBalance}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>React Example</h1>
        <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      </>
    );
  }
}

export default App;
