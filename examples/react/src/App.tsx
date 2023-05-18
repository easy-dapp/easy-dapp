
import { useMetaMaskConnect } from "@easy-dapp/react"
import {weiToEth, getBalance} from "@easy-dapp/core"

function App() {
 const {account, chainId, isConnected, isInstalled, connectToMetaMask} = useMetaMaskConnect()
 console.log(account, chainId, isConnected, isInstalled)
 
 async function test() {
  console.log(account, chainId)
    const balance = await getBalance(account, chainId)
    const ethBalance = weiToEth(Number(balance))
    console.log(ethBalance)
 }
 
 return (
    <>
      <h1>React App</h1>
      <button onClick={connectToMetaMask}>Connect to MetaMask</button>
      <button onClick={() => test()}>GetBalance</button>
    </>
  )
}

export default App
