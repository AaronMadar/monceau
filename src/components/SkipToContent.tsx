import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-900 text-white px-4 py-2 rounded-sm font-sans font-medium z-50 focus:outline-none focus:ring-2 focus:ring-white"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipToContent;