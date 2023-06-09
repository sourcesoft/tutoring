import { useState, useEffect } from 'react'
import './App.css'

interface Message {
  user: number
  message: string
}

function App() {
  const [text1, setText1] = useState<string>('')
  const [text2, setText2] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    // we're gonna retrieve list of messages using an AJAX request from sever
    // from the endpoint `http://localhost:3000/messages` (GET method)
    fetch("http://localhost:3000/messages")
      .then(p => p.json())
      .then((jsonData) => {
        setMessages(jsonData.data)  
      })
      .catch((err) => {
        console.log(err)
      })

    // const fetchMessages = async () => {
    //   console.log('going to fetch initial messages from server!')
    //   const response = await fetch("http://localhost:3000/messages");
    //   const jsonData = await response.json();
    //   console.log(jsonData);  
    //   setMessages(jsonData.data)  
    // }
    // fetchMessages()
  }, [])

  const onChangeText1 = (event: any) => {
    setText1(event.target.value)
  }
  const onChangeText2 = (event: any) => {
    setText2(event.target.value)
  }

  const onSubmitText1 = (event: any) => {
    setMessages([...messages, {
      user: 1,
      message: text1,
    }])
    setText1('')
  }
  const onSubmitText2 = (event: any) => {
    setMessages([...messages, {
      user: 2,
      message: text2,
    }])
    setText2('')
  }
  return (
    <>
      <ul>
        {messages.map((message, index) => (
          <li key={index}><b>{message.user} said</b>: {message.message}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={text1} onChange={onChangeText1} />
        <button disabled={text1===''} onClick={onSubmitText1}>Send (user 1)</button>
      </div>
      <div>
        <input type="text" value={text2} onChange={onChangeText2} />
        <button disabled={text2===''} onClick={onSubmitText2}>Send (user 2)</button>
      </div>
    </>
  )
}

export default App
