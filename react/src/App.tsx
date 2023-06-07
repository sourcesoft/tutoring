import { useState, useEffect, ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// what is a react component?
// it's a js function that returns JSX (HTML)
// smart components or container components or stateful components
export function Example() {
  const [myvar, setMyvar] = useState('default');
  const [fruits, setFruits] = useState(['apple', 'orange', 'cherry', 'bananna', 'mongo']);
  console.log('everytime variable', myvar)
  console.log('everytime array', fruits)

  useEffect(() => {
    console.log('useEffect myvar', myvar)
    if (myvar === 'bye') {
      setTimeout(() => {
        setMyvar('see you soon')
      }, 2000)
    }
  }, [myvar])
  useEffect(() => {
    console.log('useEffect fruits', fruits)
  }, [fruits])
  const onChangeText = () => {
    setMyvar('bye')
  }
  return <div>
    hi <span>guys</span>
    <button onClick={() => setFruits([...fruits, 'strawberry', 'melon'])}>add fruits</button>
    <Something
      fruits={fruits}
      showBox={true}
      text={myvar}
      onChangeText={onChangeText}
      someProps="hi"
      someNumber={123}
    >some text</Something>
    <Something
      showBox={false}
      text={myvar}
      onChangeText={onChangeText}
      someProps="hi"
      someNumber={123}
    />
  </div>
}
interface SomethingProps {
  showBox?: boolean,
  text: string,
  someProps: string,
  someNumber?: number,
  fruits?: string[],
  onChangeText: () => void,
  children?: ReactNode,
}
// dumb component or stateless components
export function Something({ text, fruits, showBox, someProps, onChangeText, children }: SomethingProps) {
  //const { text, someProps, onChangeText, children } = props
  return (
    <div className={`something ${showBox && 'show-border'}`}>
      {showBox && (
        <div className="red-thing"></div>
      )}
      {text === 'default' ? (
        <div>text is default</div>
      ) : (
        <div>text is not default</div>
      )}
      {text === 'default' && (
        <div>text is default</div>
      )}
      {text !== 'default' && (
        <div>text is not default</div>
      )}
      <ul className="list">{fruits?.map((fruit, i) => (
          <li key={i}>{fruit.toUpperCase()}</li>)
        )
      }</ul>
      <p>wow</p>
      <div>here are the children passed by the parent '{children}'</div>
      <div>{text}</div>
      <div>{someProps}</div>
      <button onClick={() => onChangeText()}>SAY BYE</button>
      <span>asdf</span>
    </div>
  )
}
// very useful and compact for dumb components
export const SomethingNew = ({ text, showText, someProps, onChangeText, children }: SomethingProps) => (<div className="something">
  <div className="red-thing"></div>
  <p>wow</p>
  <div>here are the children passed by the parent '{children}'</div>
  <div>{text}</div>
  <div>{someProps}</div>
  <button onClick={() => onChangeText()}>change text</button>
  <span>asdf</span>
</div>)

export function App(props: any) {
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