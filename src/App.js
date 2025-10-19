import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PetCareForm from './components/PetCareForm';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50">
        <PetCareForm />
      </div>
    </Provider>
  );
}

export default App;
