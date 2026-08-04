'use client';

import { useState } from 'react';

export default function CVDownloadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleView = () => {
    window.open('/Resume.pdf', '_blank');
    onClose();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Sanket_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-80 mx-4 animate-fade-in-scale">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">Download Resume</h3>
        <p className="text-sm text-slate-500 mb-6 text-center">Choose how you'd like to access your resume</p>

        {/* Options */}
        <div className="space-y-3">
          {/* View Button */}
          <button
            onClick={handleView}
            className="w-full flex items-center gap-3 px-4 py-3 bg-slate-100 hover:bg-cyan-50 hover:border-cyan-300 border border-transparent rounded-xl transition-all group"
          >
            <div className="w-10 h-10 bg-cyan-100 group-hover:bg-cyan-200 rounded-lg flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-800">View Resume</p>
              <p className="text-xs text-slate-500">Open in new tab</p>
            </div>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full flex items-center gap-3 px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-all group"
          >
            <div className="w-10 h-10 bg-cyan-400 group-hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold">Download Resume</p>
              <p className="text-xs text-cyan-100">Save as PDF file</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
