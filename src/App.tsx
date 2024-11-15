import { useState } from "react";
import "./App.css";
import { sendChatRequest } from "./services/chatgptService";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const send = async () => {
    try {
      const response = await sendChatRequest(text);
      console.log("Response from chatgpt:", response);
      setOutput(response);
    } catch (error) {
      console.error("Error sending chat request:", error);
    }
  };

  return (
    <>
      <h1>Input text to get a response</h1>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={send}>Submit</button>
        <div>
          <p>{output}</p>
        </div>
      </div>
    </>
  );
}

export default App;
