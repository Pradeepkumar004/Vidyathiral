import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error Boundary Caught Error:', error, errorInfo);
    
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
    // Navigate to home
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Error Icon */}
            <div className="mb-6 text-center">
              <svg 
                className="w-24 h-24 mx-auto text-red-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Oops! Something Went Wrong
            </h1>
            
            {/* Error Message */}
            <p className="text-lg text-gray-600 mb-6 text-center">
              We're sorry, but something unexpected happened. Our team has been notified and we're working on it.
            </p>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-red-800 mb-2">
                  Error Details (Development Only):
                </h3>
                <p className="text-sm text-red-700 font-mono break-all mb-2">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <details className="text-xs text-red-600 mt-2">
                    <summary className="cursor-pointer font-semibold">
                      Component Stack
                    </summary>
                    <pre className="mt-2 overflow-auto p-2 bg-white rounded">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 shadow-md"
              >
                Return to Homepage
              </button>
              
              <Link
                to="/contact"
                className="bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 shadow-md text-center"
              >
                Contact Support
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                If this problem persists, please{' '}
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  contact our support team
                </Link>
                {' '}with details about what you were doing when the error occurred.
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Render children normally if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
