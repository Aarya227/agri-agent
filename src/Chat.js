import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

function Chat({ onNavigate, onSpeak }) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello, farmer! How can I help you today?", sender: 'ai' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speak first AI message
  useEffect(() => {
    if (messages.length > 0 && messages[0].sender === 'ai') {
      onSpeak(messages[0].text);
    }
  }, []);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    const userMessage = { text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, sender: 'ai' }]);
      onSpeak(data.response);
    } catch (error) {
      console.error("Error sending message to AI:", error);
      setMessages(prev => [...prev, { text: "⚠️ Error: Could not get a response.", sender: 'ai' }]);
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
      recognition.onstart = () => setInputText('Listening...');
      recognition.onresult = (event) => setInputText(event.results[0][0].transcript);
      recognition.onerror = () => setInputText('Error. Please try again.');
      recognition.start();
    } else {
      alert('Your browser does not support voice input.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') handleSendMessage();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(to bottom right, #E8F5E9, #F4F6F6)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Back Button */}
      <button
        onClick={() => onNavigate('home')}
        style={{
          padding: '8px 15px',
          fontSize: '14px',
          border: 'none',
          backgroundColor: '#2E7D32',
          color: 'white',
          borderRadius: '20px',
          cursor: 'pointer',
          margin: '10px 15px',
          alignSelf: 'flex-start',
          boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
        }}
      >
        ← Back
      </button>

      {/* Chat History */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '0 15px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              background: msg.sender === 'user'
                ? 'linear-gradient(135deg, #2E7D32, #66BB6A)'
                : '#FFFFFF',
              color: msg.sender === 'user' ? '#fff' : '#333',
              padding: '12px 16px',
              borderRadius: '18px',
              maxWidth: '75%',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              fontSize: '15px',
              lineHeight: '1.4'
            }}>
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{
            background: '#fff',
            padding: '10px 15px',
            borderRadius: '18px',
            width: 'fit-content',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}>
            Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div style={{
        display: 'flex',
        padding: '12px',
        background: '#FFFFFF',
        borderTop: '1px solid #E0E0E0',
        alignItems: 'center',
        gap: '10px',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.05)'
      }}>
        <input
          type="text"
          placeholder="Type your question..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            padding: '10px 15px',
            fontSize: '15px',
            borderRadius: '20px',
            border: '1px solid #CCC',
            outline: 'none',
            transition: 'border 0.2s ease'
          }}
        />
        <button
          onClick={handleVoiceInput}
          style={{
            background: '#2E7D32',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <FaMicrophone />
        </button>
        <button
          onClick={handleSendMessage}
          style={{
            background: 'linear-gradient(135deg, #2E7D32, #66BB6A)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            padding: '10px',
            cursor: 'pointer',
            fontSize: '18px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default Chat;
