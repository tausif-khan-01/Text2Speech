const speech = new SpeechSynthesisUtterance();
let voices = [];

function populateVoices() {
  voices = speechSynthesis.getVoices();

  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = '';

  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = voice.name;
    voiceSelect.appendChild(option);
  });

  // Set the initial voice
  speech.voice = voices[0];
  voiceSelect.value = 0;
}

// Wait for the voices to be loaded
speechSynthesis.onvoiceschanged = populateVoices;

// Handle voice selection change
document.getElementById('voiceSelect').addEventListener('change', () => {
  const selectedVoiceIndex = document.getElementById('voiceSelect').value;
  speech.voice = voices[selectedVoiceIndex];
});

// Handle speak button click
document.getElementById('speakButton').addEventListener('click', () => {
  const text = document.querySelector('textarea').value;
  speech.text = text;
  speechSynthesis.speak(speech);
});