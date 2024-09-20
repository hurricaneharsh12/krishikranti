import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Chat.css"; // This line imports the CSS

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    generateRandomColor();
  }, []);

  function generateRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    setBackgroundColor(`hsl(${hue}, 70%, 80%)`);
  }

  async function generateAnswer() {
    setAnswer("Loading");
    alert("You will get your answer in a few seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBCfkwJjzOnSp4k-i8v6N89e3TX0sJv41c",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("An error occurred. Please try again.");
      console.error("Error generating answer:", error);
    }
    generateRandomColor();
  }

  return (
    <div className="chat-container" style={{ backgroundColor }}>
      <h1>ChatBot Designed for Farmers 👨🌾</h1>
      <div className="content-wrapper">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your farming-related question here..."
        />
        <button onClick={generateAnswer}>Generate Answer</button>
        <div className="answer-container">
          {answer || "Your answer will appear here..."}
        </div>
      </div>
    </div>
  );
}

export default Chat;
