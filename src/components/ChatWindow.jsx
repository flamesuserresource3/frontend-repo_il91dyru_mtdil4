import React, { useEffect, useRef, useState } from 'react';
import { Send, User, Headphones } from 'lucide-react';

const MessageBubble = ({ role, text, time }) => {
  const isAgent = role === 'agent';
  return (
    <div className={`flex items-end gap-2 ${isAgent ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md ${isAgent ? 'bg-cyan-400/20 text-cyan-200 border border-cyan-300/30' : 'bg-pink-400/20 text-pink-200 border border-pink-300/30'}`}>
        {isAgent ? <Headphones size={18} /> : <User size={18} />}
      </div>
      <div className={`max-w-[70%] rounded-2xl border p-3 shadow-lg backdrop-blur-md ${isAgent ? 'bg-white/10 border-white/20 text-white' : 'bg-white/20 border-white/30 text-slate-900'} `}>
        <p className="text-sm leading-relaxed">{text}</p>
        <span className={`mt-1 block text-[10px] ${isAgent ? 'text-white/60' : 'text-slate-700/60'}`}>{time}</span>
      </div>
    </div>
  );
};

const ChatWindow = ({ title, subtitle, messages, onSend, view }) => {
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <div className="relative flex h-[70vh] w-full flex-col rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-white/70">{subtitle}</p>
        </div>
        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
          {view === 'user' ? 'Customer View' : 'Agent View'}
        </div>
      </div>

      <div className="custom-scrollbar mb-4 flex-1 space-y-3 overflow-y-auto pr-1">
        {messages.map((m, idx) => (
          <MessageBubble key={idx} role={m.role} text={m.text} time={m.time} />
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-auto flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
        <input
          className="w-full bg-transparent px-3 text-sm text-white placeholder-white/60 outline-none"
          placeholder={view === 'user' ? 'Type your message…' : 'Reply to customer…'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-xl bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white transition"
        >
          <Send size={16} />
          Send
        </button>
      </form>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
    </div>
  );
};

export default ChatWindow;
