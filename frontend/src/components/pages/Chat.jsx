import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";

const initialMessages = [
  {
    id: "1",
    content: "Hello! I'm Gemini Health Assistant. I'm here to help with your health questions and provide initial guidance. How can I assist you today?",
    sender: "ai",
    timestamp: new Date()
  }
];
 const  Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your question. Based on what you've described, here are some initial observations:\n\n• It's important to monitor your symptoms closely\n• Consider keeping a symptom diary\n• If symptoms persist or worsen, please consult with a healthcare professional\n\nWould you like me to help you find a suitable doctor for a consultation?",
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-light">
      {/* Header */}
      <div className="bg-card border-b border-border px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Gemini Health Assistant</h1>
            <p className="text-sm text-muted-foreground">AI-powered health guidance • Always available</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              "flex " + (message.sender === "user" ? "justify-end" : "justify-start")
            }
          >
            <div
              className={
                "max-w-2xl rounded-2xl px-4 py-3 shadow-sm " +
                (message.sender === "user"
                  ? "bg-secondary text-secondary-foreground ml-12"
                  : "bg-card text-card-foreground border mr-12")
              }
            >
              <div className="flex items-start space-x-3">
                {message.sender === "ai" && (
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                {message.sender === "user" && (
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-2xl rounded-2xl px-4 py-3 bg-card text-card-foreground border mr-12">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-card border-t border-border px-6 py-4">
        <div className="flex space-x-3">
          {/* Input box */}
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe your symptoms or ask a health question..."
            className="flex-1 rounded-xl border border-border focus:ring-primary px-4 py-2"
          />
          {/* Send button */}
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="btn-healing px-4 py-2 rounded-xl flex items-center justify-center disabled:opacity-50"
          >
            {isTyping ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          This AI assistant provides general health information and is not a substitute for professional medical advice.
        </p>
      </div>
    </div>

    
  );
} 


export default Chat;