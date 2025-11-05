import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
          Live Support • Glassmorphic • Realtime Ready
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
          Elegant Live Chat for Modern Brands
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          A two-sided experience for customers and support teams — crafted with floating glass panels and a futuristic 3D vibe.
        </p>
      </div>
    </section>
  );
};

export default Hero;
