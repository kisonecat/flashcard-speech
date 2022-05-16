var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();

window.addEventListener('load', function() {
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  var grammar = '#JSGF V1.0; grammar numbers; public <number> = ' + numbers.join(' | ') + ' ;'

  var speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);

  recognition.grammars = speechRecognitionList;
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.start();
});

recognition.onresult = function(event) {
  console.log( event.results[0][0] );
  console.log('Confidence: ' + event.results[0][0].confidence);

  const answerEvent = new CustomEvent('answer', {detail: event.results[0][0].transcript });
  window.dispatchEvent(answerEvent);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onstart = function() {
  console.log("starting");
}

recognition.onend = function() {
  console.log("ending");
  recognition.start();
}

recognition.onnomatch = function(event) {
  console.log("no match!");
}

recognition.onerror = function(event) {
  console.log("error");
}
