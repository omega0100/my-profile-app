import React from 'react';
import './App.css';
import NameDisplay from './components/NameDisplay';
import PhotoUpload from './components/PhotoUpload';
import VoiceComponent from './components/VoiceComponent';

function App() {
  return (
    <div className="App">
      <NameDisplay />
      <PhotoUpload />
      <VoiceComponent />
    </div>
  );
}

export default App;
