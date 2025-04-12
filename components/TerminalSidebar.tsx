import React, { useState } from 'react'

const TerminalSidebar = () => {
  const [messages, setMessages] = useState([
    { type: 'system', content: '> Terminal initialized' },
    { type: 'system', content: '> AI assistant ready' }
  ]);
  const [input, setInput] = useState('');
  const [minimized, setMinimized] = useState(true);

  // Function to handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { type: 'user', content: input }]);
    
    // Simulate AI response (you can replace this with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: `I received: "${input}". How can I help with your documentation?` 
      }]);
    }, 500);

    setInput('');
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  return (
    <div className={`terminal-popup ${minimized ? 'minimized' : ''}`}>
      <div className="terminal-header">
        <div className="terminal-title">Code Agent</div>
        <div className="terminal-controls">
          <button onClick={toggleMinimize} className="minimize-button">
            {minimized ? '↗' : '↘'}
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          <div className="terminal-body">
            {messages.map((msg, i) => (
              <div key={i} className={`terminal-message ${msg.type}`}>
                {msg.type === 'system' ? (
                  <span>{msg.content}</span>
                ) : msg.type === 'user' ? (
                  <div className="message-bubble user-bubble">
                    <span>{msg.content}</span>
                  </div>
                ) : (
                  <div className="message-bubble ai-bubble">
                    <span>{msg.content}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="terminal-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              placeholder="Ask me something..."
            />
            <button type="submit" className="send-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </>
      )}

      <style jsx>{`
        .terminal-popup {
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 80px; /* Leave space for the navbar */
          bottom: 30px;
          right: 30px;
          width: 380px;
          height: calc(100vh - 110px); /* Full height minus space for header and bottom margin */
          background-color: #ffffff;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        
        .terminal-popup.minimized {
          height: auto;
          width: auto;
          min-height: auto;
          background-color: transparent;
          box-shadow: none;
          border: none;
        }
        
        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          padding: 12px 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          cursor: pointer;
        }
        
        .terminal-popup.minimized .terminal-header {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          min-width: 140px;
        }
        
        .terminal-title {
          font-weight: 600;
          font-size: 15px;
          color: #212529;
        }
        
        .terminal-controls {
          display: flex;
        }
        
        .minimize-button {
          background: none;
          border: none;
          color: #6c757d;
          cursor: pointer;
          font-size: 16px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        
        .minimize-button:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .terminal-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background-color: #f8f9fa;
          max-height: none; /* Remove max-height limitation */
        }
        
        .terminal-message {
          font-size: 14px;
          line-height: 1.5;
          word-break: break-word;
        }
        
        .terminal-message.system {
          color: #6c757d;
          font-style: italic;
          font-size: 13px;
          margin-bottom: 8px;
        }

        .message-bubble {
          padding: 10px 14px;
          border-radius: 18px;
          max-width: 85%;
          display: inline-block;
        }
        
        .user-bubble {
          background-color: #e9ecef;
          color: #212529;
          border-top-right-radius: 4px;
          margin-left: auto;
        }
        
        .ai-bubble {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white;
          border-top-left-radius: 4px;
        }
        
        .terminal-input-container {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background-color: #ffffff;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          gap: 10px;
        }
        
        .terminal-input {
          flex: 1;
          background-color: #f1f3f5;
          border: none;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          font-size: 14px;
          outline: none;
          padding: 10px 16px;
          border-radius: 24px;
          transition: all 0.2s ease;
        }
        
        .terminal-input:focus {
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.3);
          background-color: white;
        }
        
        .terminal-input::placeholder {
          color: #adb5bd;
        }

        .send-button {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white;
          border: none;
          height: 38px;
          width: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .send-button:hover {
          transform: scale(1.05);
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.4);
        }
      `}</style>
    </div>
  );
};

export default TerminalSidebar; 