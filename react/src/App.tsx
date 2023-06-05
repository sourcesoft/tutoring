import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// what is a react component?
// it's a js function that returns JSX (HTML)
export function Example() {
  return <div>hi <span>guys</span><Something text="helloooo" /></div>
}
export function Something({ text }: { text: string }) {
  return (
    <>
      <p>wow</p>
      {text}
      <span>asdf</span>    
    </>
  )
}

export function App() {
  const [count, setCount] = useState(0) // create a new state with default value '0'
  // count : the variable itself which we can use in JSX like {count}
  // setCount: is the function to change the count (the variable)
  const [greetings, setGreetings] = useState('hi')

  return (
    <>
      <Example />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setGreetings('bye')}>
          greeting is {greetings}
        </button>
        <br /><br />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App