let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.addEventListener("load", (event) => {
    loadVoices()
  });

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))

  );
  
};



voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});


function loadVoices() {
    const synth = window.speechSynthesis
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = i;
      voiceSelect.appendChild(option);
    }
}  
