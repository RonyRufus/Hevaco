import React from 'react';
import Logo from './Logo';

interface PdfPageProps {
  children: React.ReactNode;
  pageNumber?: number;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
}

const PdfPage: React.FC<PdfPageProps> = ({ 
  children, 
  pageNumber, 
  hideHeader = false, 
  hideFooter = false,
  className = "" 
}) => {
  return (
    <div className={`pdf-page flex flex-col ${className}`}>
      {/* Header */}
      {!hideHeader && (
        <div className="px-12 py-8 flex justify-between items-end border-b border-slate-100">
          <Logo className="scale-75 origin-bottom-left -ml-2" />
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase tracking-widest">Company Profile</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-grow relative">
        {children}
      </div>

      {/* Footer */}
      {!hideFooter && (
        <div className="px-12 py-6 mt-auto border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400">
          <span>www.hevaco.com</span>
          <div className="flex items-center gap-4">
             <span>Your Trusted HVAC Partner</span>
             {pageNumber && (
               <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">
                 {pageNumber}
               </span>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfPage;