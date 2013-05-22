
describe("An example", function() {
	
	it("A simple expectation", function() {
		expect(true).toBe(true);
	})
	
	it("Answers the question of life", function() {
		var answer = getTheAnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything();
		expect(answer).toBe(42);
	})
})