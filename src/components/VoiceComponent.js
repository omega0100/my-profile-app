import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const VoiceComponent = () => {
  const [text, setText] = useState('');
  const { speak } = useSpeechSynthesis();

  const handleSpeak = () => {
    if (text.trim() !== '') {
      speak({ text });
    }
  };

  return (
    <div className="voice-component">
      <h2>Text-to-Speech</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text to speak..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default VoiceComponent;
