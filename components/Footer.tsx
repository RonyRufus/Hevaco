import React from 'react';
import { COMPANY_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-bold tracking-wider uppercase">HEVACO</h2>
          <p className="text-sm mt-1">Cooling Systems (Pvt.) Ltd</p>
        </div>
        
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50">
            Designed for Excellence. Built on Trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;