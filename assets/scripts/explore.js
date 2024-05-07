window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList();

  const pressToTalkButton = document.querySelector('button');
  const textToSpeakTextarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const faceImage = document.querySelector('img');

  pressToTalkButton.addEventListener('click', () => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textToSpeakTextarea.value);
    const selectedVoiceURI = voiceSelect.selectedOptions[0].getAttribute('data-uri');


    const selectedVoice = speechSynthesis.getVoices().find(voice => voice.voiceURI === selectedVoiceURI);
    utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}


function populateVoiceList() {
  const speechSynthesis = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');

  speechSynthesis.addEventListener('voiceschanged', () => {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name;
      option.setAttribute('data-uri', voice.voiceURI);
      voiceSelect.appendChild(option);
    });
  });
}