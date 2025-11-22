import React from 'react';
import { Sun, Snowflake } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <div className="absolute inset-0 text-blue-200 animate-spin-slow" style={{ animationDuration: '10s' }}>
            <Snowflake size={48} strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-blue-600">
             <Snowflake size={48} className="rotate-45 opacity-40" strokeWidth={1.5} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <Sun size={24} className="text-red-600 fill-red-600" />
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col leading-none">
        <h1 className="text-3xl font-bold text-[#1e40af] serif tracking-wide" style={{ fontFamily: '"Times New Roman", serif' }}>
          HEVACO
        </h1>
        <span className="text-[10px] font-bold text-slate-800 tracking-widest uppercase transform scale-y-90 origin-top-left">
          Cooling Systems (P) Ltd.
        </span>
      </div>
    </div>
  );
};

export default Logo;