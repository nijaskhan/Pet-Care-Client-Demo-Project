import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastProvider } from './components/customs/Toast/ToastProvider';
import PetCareForm from './components/PetCareForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50">
          <PetCareForm />
        </div>
      </ToastProvider>
    </Provider>
  );
}

export default App;
