import React, { useState } from 'react'

const TerminalSidebar = () => {
  const [messages, setMessages] = useState([
    { type: 'system', content: '> Terminal initialized' },
    { type: 'system', content: '> <span style="color: #FF8C00;">code</span>' },
    { type: 'system', content: `● I'll help you explore the codebase. Let me
  first check what files we have to understand
  what code is available.

● <span style="color: #FF8C00;">Call</span>(<span style="color: #FF8C00;">Examine</span> code files)…
  └─ <span style="color: #FF8C00;">Read</span>(paid_user_metrics_visualization.py)…
  └─ <span style="color: #FF8C00;">Read</span>(visualizations/gender_visualization.py)…
  └─ <span style="color: #FF8C00;">Read</span>(visualizations/new_gender_age_visualization.py)…
  └─ <span style="color: #FF8C00;">Done</span> (3 tool uses · 0s)

● Would you like me to explain these
  visualization scripts or help you create a new
  visualization? I can also help you check the
  data files.` }
  ]);
  const [input, setInput] = useState('');
  const [minimized, setMinimized] = useState(true);

  // Function to handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user input as terminal command
    setMessages([...messages, { type: 'system', content: `> <span style="color: #FF8C00;">${input}</span>` }]);
    
    // Simulate AI response in terminal format
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'system', 
        content: `● I'll analyze your request to ${input}

● <span style="color: #FF8C00;">Call</span>(<span style="color: #FF8C00;">Search</span> relevant files)…
  └─ <span style="color: #FF8C00;">Read</span>(data_processing/analyze.py)…
  └─ <span style="color: #FF8C00;">Done</span> (1 tool use · 0s)

● I found the relevant code. Would you like me to explain
  how it works or suggest improvements?` 
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
        <div className="terminal-title">Code Terminal</div>
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
              <div key={i} className="terminal-message system">
                <span className="terminal-text" dangerouslySetInnerHTML={{ __html: msg.content }}></span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="terminal-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              placeholder="Enter a command..."
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
          color: #212529;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 16px 16px 0 0;
          cursor: pointer;
        }
        
        .terminal-popup.minimized .terminal-header {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          min-width: 140px;
          border-radius: 16px;
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
          gap: 4px;
          background-color: #f8f9fa;
          color: #000000;
          font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
          max-height: none; /* Remove max-height limitation */
        }
        
        .terminal-message {
          font-size: 14px;
          line-height: 1.4;
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .terminal-message.system {
          color: #000000;
          font-size: 13px;
        }

        .terminal-text {
          display: block;
          padding: 4px 0;
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
          border: 1px solid #e5e7eb;
          color: #000000;
          font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          outline: none;
          padding: 10px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
        }
        
        .terminal-input:focus {
          border-color: #6D77FF;
          box-shadow: 0 0 0 2px #D4D6FF;
          background-color: white;
        }
        
        .terminal-input::placeholder {
          color: #adb5bd;
        }

        .send-button {
          background-color: #6D77FF;
          color: white;
          border: none;
          height: 38px;
          width: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(109, 119, 255, 0.2);
        }

        .send-button:hover {
          background-color: #5B66FF;
          box-shadow: 0 4px 8px rgba(109, 119, 255, 0.3);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};

export default TerminalSidebar; 