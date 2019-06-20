clothingSuggestion();

function clothingSuggestion() {
  var eventType = prompt('How formal is the event?', 'casual, semi-formal, or formal');
  var tempFahr = prompt('What is the tempurture?', 'Degrees Fahrenheit');
  if (eventType == 'casual' && tempFahr < 54) {
    console.log('Since it is below 54 degrees and you are going to a casual event, you should wear something comfy with a coat.');
  }
  else if (eventType == 'casual' && tempFahr > 70) {
    console.log('Since it is above 70 degrees and you are going to a casual event, you should wear something comfy without a jacket.');
  }
  else if (eventType == 'semi-formal' && tempFahr < 54) {
    console.log('Since it is below 54 degrees and you are going to a semi-formal event, you should wear a polo with a coat.');
  }
  else if (eventType == 'semi-formal' && tempFahr > 70) {
    console.log('Since it is above 70 degrees and you are going to a semi-formal event, you should wear a polo without a jacket.');
  }
  else if (eventType == 'formal' && tempFahr < 54) {
    console.log('Since it is below 54 degrees and you are going to a formal event, you should wear a suit with a coat.');
  }
  else if (eventType == 'formal' && tempFahr > 70) {
    console.log('Since it is above 70 degrees and you are going to a formal event, you should wear a suit without a jacket.');
  }
}
