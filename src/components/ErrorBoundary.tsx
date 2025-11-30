import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center border border-gray-200">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-serif font-semibold text-primary-900 mb-4">
              Une erreur s'est produite
            </h1>
            
            <p className="text-anthracite-600 font-sans leading-relaxed mb-6">
              Nous nous excusons pour ce désagrément. Notre équipe technique a été notifiée 
              et travaille à résoudre ce problème.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-primary-900 text-white px-6 py-3 rounded-sm font-sans font-medium hover:bg-primary-800 transition-colors duration-300"
              >
                Recharger la page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full border border-primary-900 text-primary-900 px-6 py-3 rounded-sm font-sans font-medium hover:bg-primary-50 transition-colors duration-300"
              >
                Retour à l'accueil
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded border text-left">
              <p className="text-xs text-anthracite-500 font-sans">
                Pour toute assistance : contact@monceaudavid.fr
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;