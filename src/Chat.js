import React, { useState, useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa'; // Import the microphone icon

function Chat({ onNavigate, onSpeak }) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello, farmer! How can I help you today?", sender: 'ai' }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length > 0 && messages[0].sender === 'ai') {
      onSpeak(messages[0].text);
    }
  }, []);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    const userMessage = { text: inputText, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText }),
      });
      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, { text: data.response, sender: 'ai' }]);
      onSpeak(data.response);
    } catch (error) {
      console.error("Error sending message to AI:", error);
      setMessages(prevMessages => [...prevMessages, { text: "Error: Could not get a response.", sender: 'ai' }]);
      onSpeak("Error: Could not get a response.");
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.onstart = () => {
        console.log('Voice recognition started. Speak now!');
        setInputText('Listening...');
      };
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        console.log('Voice input:', transcript);
      };
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setInputText('Error. Please try again.');
      };
      recognition.start();
    } else {
      alert('Your browser does not support voice input. Please use a text.');
    }
  };

  // New function to handle 'Enter' key press
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#333333' // Dark background for contrast
    }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        style={{
          padding: '8px 15px',
          fontSize: '14px',
          border: 'none',
          backgroundColor: '#555',
          color: 'white',
          borderRadius: '20px',
          cursor: 'pointer',
          alignSelf: 'flex-start'
        }}>
        &larr; Back
      </button>

      {/* Chat History Area */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '20px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            margin: '5px 0'
          }}>
            <div style={{
              backgroundColor: msg.sender === 'user' ? '#4CAF50' : '#fff',
              color: msg.sender === 'user' ? 'white' : 'black',
              padding: '10px 15px',
              borderRadius: '20px',
              maxWidth: '80%',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '5px 0' }}>
            <div style={{ backgroundColor: '#fff', padding: '10px 15px', borderRadius: '20px' }}>
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input and Send Button Area */}
      <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #555', backgroundColor: '#444', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Type your question here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for key presses
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #777',
            borderRadius: '20px',
            backgroundColor: '#fff',
            color: 'black'
          }}
        />
        <button
          onClick={handleVoiceInput}
          style={{
            marginLeft: '10px',
            padding: '10px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#555',
            color: 'white',
            cursor: 'pointer',
            fontSize: '24px',
            width: '45px',
            height: '45px'
          }}>
          <FaMicrophone /> {/* The new microphone icon */}
        </button>
        <button
          onClick={handleSendMessage}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer'
          }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;