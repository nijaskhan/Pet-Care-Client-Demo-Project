import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastProvider } from './components/customs/Toast/ToastProvider';
import PetCareForm from './components/PetCareForm';
import ClientPreview from './pages/ClientPreview';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50">
                  <PetCareForm />
                </div>
              } 
            />
            <Route path="/preview/:id" element={<ClientPreview />} />
          </Routes>
        </Router>
      </ToastProvider>
    </Provider>
  );
}

export default App;
