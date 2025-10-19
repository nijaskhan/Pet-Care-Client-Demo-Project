import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              React + Tailwind CSS
            </h1>
            <p className="text-xl text-gray-600">
              A modern React application with Tailwind CSS styling
            </p>
          </header>

          {/* Main Content */}
          <main className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Welcome to Your React App
              </h2>

              {/* Counter Component */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-medium text-gray-700 mb-4">
                  Interactive Counter
                </h3>
                <div className="flex items-center justify-center space-x-4">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                    -
                  </button>
                  <span className="text-3xl font-bold text-gray-800 min-w-[60px]">
                    0
                  </span>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
                    +
                  </button>
                </div>
                <p className="text-gray-600 mt-4">
                  Click the buttons to increment or decrement the counter
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="text-blue-600 text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Fast Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Built with Create React App for reliable development and testing.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <div className="text-green-600 text-3xl mb-3">🎨</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Beautiful Styling
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Styled with Tailwind CSS for rapid UI development and consistent design.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <div className="text-purple-600 text-3xl mb-3">⚛️</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Modern React
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Uses the latest React features including hooks and modern patterns.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="text-center text-gray-600">
            <p>
              Built with ❤️ using React, Create React App, and Tailwind CSS
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
