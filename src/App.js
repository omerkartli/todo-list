import React,{useState} from "react"
import './App.css';

function App() {

  const [text, setText] = useState("")
  const [message, setMessage] = useState([])
  console.log("text",text);

  const onChangeFunc = (e) => {
    setText(e.target.value)// onChange ile setTexti doldur
  }
  const messageFunc = () => {
    setMessage(prev => [...prev, text]) // öncekileri al texti ekle
    setText('')
  }
  console.log("message",message)
  return (
    <div className="App">
      <input value = {text} onChange = {onChangeFunc} type = "text" placeholder = "ekle"></input>
      <button onClick={messageFunc}>Ekle</button>
      {
        message.map((msg,i) => (
           <div key={i}>{msg}</div>
        ))
      }

    </div>
  );
}

export default App;
