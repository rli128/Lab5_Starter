// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList(); // Load available voices on page load

  const pressToTalkButton = document.querySelector('button');
  const textToSpeakTextarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const faceImage = document.querySelector('img');

  pressToTalkButton.addEventListener('click', () => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeakTextarea.value);
    const selectedVoiceURI = voiceSelect.selectedOptions[0].getAttribute('data-uri');

    // Set selected voice
    const selectedVoice = speechSynthesis.getVoices().find(voice => voice.voiceURI === selectedVoiceURI);
    utterance.voice = selectedVoice;

    // Event listeners for speech synthesis
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png'; // Swap image to open mouthed face
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png'; // Swap image back to smiling face after speech ends
    };

    speechSynthesis.speak(utterance); // Speak the text
  });
}

// Function to populate voice select dropdown with available voices
function populateVoiceList() {
  const speechSynthesis = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');

  speechSynthesis.addEventListener('voiceschanged', () => {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ''; // Clear existing options

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.setAttribute('data-uri', voice.voiceURI); // Store voice URI as data attribute
      voiceSelect.appendChild(option);
    });
  });
}