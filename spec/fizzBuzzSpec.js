describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('all other numbers', function() {
    it('1 for 1', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });

});