import React from 'react';
import { MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg">
            <MessageCircle size={18} />
          </div>
          <span className="text-lg font-semibold text-white">GlassChat</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
            Docs
          </button>
          <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-white/90">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
