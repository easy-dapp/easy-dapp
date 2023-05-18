import { useMetaMaskConnect } from "@easy-dapp/react/dist"

function App() {
 const {account, isConnected, isInstalled, connectToMetaMask} = useMetaMaskConnect()
 console.log(account, isConnected, isInstalled)
 return (
    <>
      <h1>React App</h1>
      <button onClick={connectToMetaMask}>Connect to MetaMask</button>
    </>
  )
}

export default App
