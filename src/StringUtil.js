String.prototype.hasVowels = function(){
		return /[aeiou]+/gi.test(this);
};

String.prototype.uppercase = function () {
	return this.replace(/[a-z]/g, function(match){
		return String.fromCharCode(match.charCodeAt(0)-32);
	});
};

String.prototype.lowercase = function () {
	return this.replace(/[A-Z]/g, function(match){
		return String.fromCharCode(match.charCodeAt(0)+32);
	});
};

String.prototype.ucFirst = function () {
	return this.replace(/^[a-z]/, function(match){
		return match.uppercase();
	});
};

String.prototype.isQuestion = function () {
	return /[\?]$/gi.test(this);
};

String.prototype.words = function () {
	return this.match(/\w+/gi);
};

String.prototype.wordsCount = function () {
	return this.words().length;
};

String.prototype.toCurrency = function () {
	return this.replace(/\d(?=(\d{3})+[\.\0]+)/g, function(match){
		return match+",";
	});
};

String.prototype.fromCurrency = function () {
	return parseFloat(this.replace(/[,]/g, ''));
};
