let eventType = window.prompt('Is the dress code casual, semi-formal, or formal?').toLowerCase();
let tempFahr = window.prompt('What is the tempurture outside?');
let result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${outfitAdvice()}`;

function outfitAdvice() {
  if (eventType === 'casual' && tempFahr < 54) {
  	return 'something comfy and a coat.';
  } else if (eventType === 'casual' && tempFahr >= 54 && tempFahr <= 70) {
	return 'something comfy and a jacket.';
  } else if (eventType === 'casual' && tempFahr > 70) {
	return 'something comfy without a jacket.';
  } else if (eventType === 'semi-formal' && tempFahr < 54) {
  	return 'a polo and a coat.';
  } else if (eventType === 'semi-formal' && tempFahr >= 54 && tempFahr <= 70) {
	return 'a polo and a jacket.';
  } else if (eventType === 'semi-formal' && tempFahr > 70) {
	return 'a polo without a jacket.';
  } else if (eventType === 'formal' && tempFahr < 54) {
  	return 'a suit and a coat.';
  } else if (eventType === 'formal' && tempFahr >= 54 && tempFahr <= 70) {
	return 'a suit and a jacket.';
  } else if (eventType === 'formal' && tempFahr > 70) {
	return 'a suit without a jacket.';
  } else {
	return 'something that looks amazing!';
  }
};

console.log(result);