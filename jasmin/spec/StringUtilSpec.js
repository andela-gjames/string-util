describe("String has vowels", function(){
	it("should return boolean to show if string has vowel letter", function(){
		expect("Knowledge is power".hasVowels()).toBe(true);
		expect("CCJY".hasVowels()).toBe(false);
		expect("Hyp".hasVowels()).toBe(false);
	});
});


describe("String to uppercase", function(){
	it("should return string in upper case", function(){
		expect("tiny".uppercase()).toBe("TINY");
		expect("Baba".uppercase()).toBe("BABA");
		expect("ABA".uppercase()).toBe("ABA");
	});
});


describe("String to lowercase", function(){
	it("should return lowercase version of string", function(){
		expect("Tiny".lowercase()).toBe("tiny");
		expect("BABA".lowercase()).toBe("baba");
		expect("ABA".lowercase()).toBe("aba");
	});
});


describe("UCFirst", function(){
	it("should convert first character of string to uppercase", function(){
		expect("tiny".ucFirst()).toBe("Tiny");
		expect("baBA".ucFirst()).toBe("BaBA");
		expect("ABA".ucFirst()).toBe("ABA");
	});
});

describe("Is it a question", function(){
	it("should check if string is question and return boolean", function(){
		expect("Are you home?".isQuestion()).toBe(true);
		expect("Are you home".isQuestion()).toBe(false);
		expect("I am home?".isQuestion()).toBe(true);
	});
});


describe("Words", function(){
	it("Should return a list of words in the string", function(){
		expect("Are you home?".words()).toEqual(["Are", "you", "home"]);
		expect("Noodles is food".words()).toEqual(["Noodles", "is", "food"]);
	});
});

describe("Words count", function(){
	it("should return number of words in  a string", function(){
		expect("Are you home?".wordsCount()).toEqual(3);
		expect("Noodles is food".wordsCount()).toEqual(3);
	});
});

describe("To currency", function(){
	it("returns a currency representation of the strign", function(){
		expect("11000.11".toCurrency()).toEqual("11,000.11");
		expect("1000000.01".toCurrency()).toEqual("1,000,000.01");
	});
});

describe("From currency", function(){
	it("should return number representation from string currency", function(){
		expect("11,000.11".fromCurrency()).toEqual(11000.11);
		expect("1,000,000.01".fromCurrency()).toEqual(1000000.01);
	});
});
