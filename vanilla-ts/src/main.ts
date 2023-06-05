import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const a: string = 'hello'
// function useA(input: number) {
//   console.log(input)
// }
console.log(a)
// useA(a)
const sth: boolean = true

const myobj: { a: number, b?: string } = {
  a: 123,
}

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// defining an object, later adding new keys
let myoj2: { a: boolean, b?: string } = {
  a: true,
}
myoj2.b = 'hi'


// defining types beforehand
type MyType = string
const s: MyType = 'asdf'

type MyF = {
  a: string
  b?: boolean
}

interface MyFF {
  a: string
  b?: boolean
}

interface S extends MyFF {
  c?: number
}

const f: MyF = {
  a: 'asdf',
  b: true,
}
const f2: MyF = {
  a: 'asdfasdfasd'
}

const f3: MyF = {
  a: 'xcvxc'
}

const f4: MyF = {
  a: 'dfgndfgndfgn'
}


// union
let aaa: string | number | boolean = 'asdf';
aaa = true;
console.log(aaa)

function logger(a: number | string): void {
  console.log(a)
}
logger(1)
logger('asdf')

function logger2(a: number | string): string {
  return `${a} + 2`
}

function logger3(a:number, b?: number): string {
  return `${a} + 2`
}
logger3(1)
logger3(1, 1)