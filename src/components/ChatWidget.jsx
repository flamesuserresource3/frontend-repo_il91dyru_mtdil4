import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'agent', text: 'Hi! How can we help today?' },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text: input.trim() }]);
    setInput('');
    // Simulate agent reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'agent', text: 'Thanks for reaching out! A teammate will reply shortly.' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white shadow-2xl backdrop-blur-xl transition hover:bg-white/20"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 shadow-md">
            <MessageCircle size={18} />
          </span>
          <span className="hidden text-sm sm:block">Chat with us</span>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="flex h-[26rem] w-[22rem] flex-col overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3 text-white">
            <div>
              <div className="text-sm font-semibold">Support</div>
              <div className="text-[11px] text-white/70">Typically replies in a few minutes</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full border border-white/20 bg-white/10 p-1.5 text-white hover:bg-white/20"
            >
              <X size={16} />
            </button>
          </div>

          <div className="custom-scrollbar flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[80%] rounded-2xl border p-3 text-sm shadow-md backdrop-blur-md ${
                m.role === 'agent'
                  ? 'ml-0 mr-auto border-white/20 bg-white/10 text-white'
                  : 'ml-auto mr-0 border-white/30 bg-white/80 text-slate-900'
              }`}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSend} className="m-3 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-2">
            <input
              className="w-full bg-transparent px-3 text-sm text-white placeholder-white/70 outline-none"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white/90"
            >
              <Send size={16} />
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
