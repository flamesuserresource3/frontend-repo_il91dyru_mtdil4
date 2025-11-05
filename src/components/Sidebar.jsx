import React from 'react';
import { MessageCircle, User, Headphones } from 'lucide-react';

const conversations = [
  { id: 'conv-1', name: 'Acme Inc.', last: 'Need help with checkout', unread: 2 },
  { id: 'conv-2', name: 'Jane Doe', last: 'Shipping times?', unread: 0 },
  { id: 'conv-3', name: 'Orbit Labs', last: 'Invoice request', unread: 1 },
];

const Sidebar = ({ activeView, setActiveView, currentConversationId, setConversationId }) => {
  return (
    <aside className="flex w-full flex-col gap-4 sm:w-72">
      <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-xl">
        <button
          onClick={() => setActiveView('user')}
          className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition ${
            activeView === 'user' ? 'bg-white/90 text-slate-900' : 'text-white hover:bg-white/10'
          }`}
        >
          <div className="flex items-center justify-center gap-2"><User size={16} /> Customer</div>
        </button>
        <button
          onClick={() => setActiveView('agent')}
          className={`flex-1 rounded-xl px-3 py-2 text-sm font-medium transition ${
            activeView === 'agent' ? 'bg-white/90 text-slate-900' : 'text-white hover:bg-white/10'
          }`}
        >
          <div className="flex items-center justify-center gap-2"><Headphones size={16} /> Agent</div>
        </button>
      </div>

      <div className="rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl">
        <div className="mb-2 flex items-center gap-2 text-white/80">
          <MessageCircle size={16} />
          <span className="text-sm">Conversations</span>
        </div>
        <div className="space-y-2">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setConversationId(c.id)}
              className={`flex w-full items-start justify-between rounded-xl border p-3 text-left transition ${
                currentConversationId === c.id
                  ? 'border-white/30 bg-white/20 text-slate-900'
                  : 'border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              <div>
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs opacity-70">{c.last}</div>
              </div>
              {c.unread > 0 && (
                <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-white/90 px-2 text-xs font-semibold text-slate-900">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
