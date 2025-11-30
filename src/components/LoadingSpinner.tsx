import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-900 rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <p className="text-anthracite-600 font-sans text-sm">Chargement...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;