// src/components/Chatbot.jsx
import { useState, useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { SYSTEM_PROMPT } from '../data/chatbotBrain'
import logoImg from '../assets/logo.png'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      text: 'Hi! I am the TSZ Assistant. Ask me anything about our tutoring programs, rates, or summer camps!' 
    }
  ])
  
  const scrollRef = useRef(null)

  // ─── GOOGLE GEMINI API KEY ───
  const API_KEY = "YOUR_GEMINI_API_KEY_HERE"

  // Auto-scroll smoothly to bottom of chat when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages, loading, isOpen])

  // Simple, lightweight Markdown bold formatter for plain text bubbles
  const formatText = (text) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-slate-900 block mt-2 mb-1">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userText = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userText }])
    setLoading(true)

    try {
      if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
        throw new Error("API Key is missing. Please paste your key into the code.")
      }

      const genAI = new GoogleGenerativeAI(API_KEY)
      
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        systemInstruction: SYSTEM_PROMPT
      })

      const result = await model.generateContent(userText)
      const response = await result.response
      const aiResponse = response.text()
      
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }])

    } catch (error) {
      console.error("Chat SDK Error:", error)
      const errorMessage = error.message?.includes("API_KEY_INVALID") 
        ? "Error: Invalid API Key. Please verify your setup."
        : `Connection Error: ${error.message}`

      setMessages(prev => [...prev, { role: 'ai', text: errorMessage }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      
      {/* ── CHAT WINDOW ── */}
      {isOpen && (
        <div 
          className="mb-4 w-[360px] sm:w-[420px] h-[540px] rounded-[2rem] flex flex-col overflow-hidden transition-all duration-300"
          style={{ 
            backgroundColor: '#ffffff',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Premium Header (Added extra padding for breathing room) */}
          <div 
            className="px-6 py-5 flex items-center justify-between text-white shrink-0" 
            style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #0D9488 100%)',    padding: '10px 0 10px 10px' }}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-inner shrink-0">
                <img 
                  src={logoImg} 
                  alt="The Study Zone Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-base leading-tight tracking-tight text-white m-0">
                  The Study Zone
                </h3>
                <span className="text-[10px] text-teal-100 uppercase tracking-widest font-extrabold block mt-0.5 opacity-90">
                  AI Assistant
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white outline-none cursor-pointer border-none"
              aria-label="Close chat window"
              style={{margin: '5px'}}
            >
              <XMarkIcon className="w-5 h-5 shrink-0" />
            </button>
          </div>

          {/* Messages Area (Injected explicit side buffers: px-5 pt-5) */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto px-5 pt-6 pb-4 flex flex-col gap-4"
            style={{ backgroundColor: '#F8FAFC' }}
          >
            {messages.map((msg, idx) => {
              const isUser = msg.role === 'user';
              const isError = msg.text.includes("Error:");

              return (
                <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed whitespace-pre-line break-words transition-all shadow-2xs ${
                      isUser 
                        ? 'text-white rounded-2xl rounded-tr-none font-medium' 
                        : isError 
                        ? 'bg-red-50 border border-red-200 text-red-800 rounded-2xl rounded-tl-none font-medium'
                        : 'bg-white border border-slate-200/60 text-slate-600 rounded-2xl rounded-tl-none'
                    }`}
                    style={{
                      backgroundColor: isUser ? '#2563EB' : undefined,
                      padding: '10px',
                      margin: '10px',
                    }}
                  >
                    {isUser ? msg.text : formatText(msg.text)}
                  </div>
                </div>
              );
            })}

            {/* Smooth Animated Typing Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200/60 px-4 py-3.5 rounded-2xl rounded-tl-none shadow-2xs flex gap-1.5 items-center">
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#3B82F6' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce delay-150" style={{ backgroundColor: '#3B82F6' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce delay-300" style={{ backgroundColor: '#3B82F6' }} />
                </div>
              </div>
            )}
          </div>

          {/* Modern Input Area (Added outer padding buffer px-4 py-3.5) */}
          <form 
            onSubmit={handleSendMessage} 
            className="px-4 py-3.5 bg-white border-t border-slate-100 flex items-center gap-2.5 shrink-0"
            style={{padding: '10px'}}
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rates, curriculum, grades..."
              className="flex-1 bg-slate-50 border border-slate-200 hover:border-slate-300 focus:bg-white focus:border-blue-600 rounded-xl px-4 py-3 text-sm outline-none text-slate-900 transition-all shadow-2xs"
            style={{padding: '10px'}}
            />
            
            <button 
              type="submit"
              disabled={loading || !input.trim()}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white transition-all active:scale-95 shadow-md disabled:opacity-40 disabled:cursor-not-allowed outline-none cursor-pointer border-none shrink-0"
              style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)',margin: '5px' }}
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="w-5 h-5 shrink-0" />
            </button>
          </form>
        </div>
      )}

      {/* ── PREMIUM FLOATING BUTTON ── */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 outline-none cursor-pointer border-none shadow-xl"
        style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #0D9488 100%)' }}
        aria-label="Toggle AI Support Assistant"
      >
        {isOpen ? (
          <XMarkIcon className="w-7 h-7 shrink-0 transition-transform rotate-90" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-7 h-7 shrink-0" />
        )}
      </button>

    </div>
  )
}