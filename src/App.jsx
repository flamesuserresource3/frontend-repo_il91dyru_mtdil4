import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

const nowTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function App() {
  const [activeView, setActiveView] = useState('user'); // 'user' | 'agent'
  const [conversationId, setConversationId] = useState('conv-1');
  const [conversations, setConversations] = useState({
    'conv-1': [
      { role: 'user', text: 'Hi! I need help with my order.', time: nowTime() },
      { role: 'agent', text: 'Of course! Could you share your order ID?', time: nowTime() },
    ],
    'conv-2': [
      { role: 'user', text: 'When will my package arrive?', time: nowTime() },
    ],
    'conv-3': [
      { role: 'agent', text: 'Hello! I can help with invoices. What do you need exactly?', time: nowTime() },
    ],
  });

  const messages = useMemo(() => conversations[conversationId] || [], [conversations, conversationId]);

  const handleSend = (text) => {
    const role = activeView === 'user' ? 'user' : 'agent';
    setConversations((prev) => ({
      ...prev,
      [conversationId]: [...(prev[conversationId] || []), { role, text, time: nowTime() }],
    }));
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
      <Header />
      <Hero />

      <main className="relative z-10 mx-auto -mt-16 max-w-6xl px-6 pb-24">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold text-white/90">Live Chat Console</h2>
          <p className="text-sm text-white/60">Switch between customer and agent to experience both sides</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto,1fr]">
          <Sidebar
            activeView={activeView}
            setActiveView={setActiveView}
            currentConversationId={conversationId}
            setConversationId={setConversationId}
          />
          <ChatWindow
            title={activeView === 'user' ? 'Chat with Support' : 'Support Inbox'}
            subtitle={activeView === 'user' ? 'We typically reply in a few minutes' : 'Respond quickly to delight customers'}
            messages={messages}
            onSend={handleSend}
            view={activeView}
          />
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-center text-xs text-white/50">
        Built with a glassmorphic aesthetic. This demo simulates messaging locally.
      </footer>
    </div>
  );
}

export default App;
